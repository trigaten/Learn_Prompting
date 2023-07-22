"use strict";
// run tsc dyno_to_new_embed.ts
// then run node dyno_to_new_embed.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODELS = void 0;
var fs = require("fs");
var path = require("path");
var yup = require("yup");
exports.MODELS = [
    "gpt-4",
    "gpt-4-0613",
    "gpt-4-32k",
    "gpt-4-32k-0613",
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-16k",
    "gpt-3.5-turbo-0613",
    "gpt-3.5-turbo-16k-0613",
    "text-davinci-003",
    "text-davinci-002",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001"
];
var urlConfigSchema = yup.object({
    model: yup.string().oneOf(exports.MODELS).default(exports.MODELS[0]),
    prompt: yup.string().default(""),
    output: yup.string().default(""),
    maxTokens: yup.number().integer().min(1).max(4000).default(256),
    temperature: yup.number().min(0).max(1).default(0.7),
    topP: yup.number().min(0).max(1).default(1),
    boxRows: yup.number().integer().min(1).default(25), // Add boxRows to the schema
});
var encodeUrlConfig = function (obj) {
    var str = JSON.stringify(obj, function (key, value) { return typeof value === 'string' ? value.replace(/\\n/g, '\n') : value; });
    var encoder = new TextEncoder();
    var data = encoder.encode(str);
    var base64 = btoa(String.fromCharCode.apply(null, data));
    return encodeURIComponent(base64);
};
var JSX_TEMPLATE = "<iframe\n    src=\"%URL%\"\n    style={{width:\"100%\", height:\"%HEIGHT%\", border:\"0\", borderRadius:\"4px\", overflow:\"hidden\"}}\n    sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n></iframe>";
var BASE_URL = 'http://embed.learnprompting.org'; // Replace this with your actual base URL
var createEmbedCode = function (config) {
    var query = encodeUrlConfig(config);
    var url = "".concat(BASE_URL, "/embed?config=").concat(query);
    var height = config.boxRows ? "".concat(50 * config.boxRows, "px") : '500px';
    return JSX_TEMPLATE.replace("%URL%", url).replace("%HEIGHT%", height);
};
// Function to recursively iterate through all files in a given path
function processDirectory(directory) {
    fs.readdirSync(directory).forEach(function (file) {
        var fullPath = path.join(directory, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        }
        else {
            processFile(fullPath);
        }
    });
}
// Function to process a single file
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err)
            throw err;
        // Replace each dyno embed with the new embed
        var updatedData = data.replace(/<div trydyno-embed(.*?)<\/div>/gs, function (match, embedConfig) {
            // Create a mapping from the embed properties to the config properties
            var propertyMapping = {
                'model': 'model',
                'prompt': 'prompt',
                'response': 'output',
                'tokens': 'maxTokens',
                'temp': 'temperature',
                'p': 'topP',
                'rows': 'boxRows',
            };
            // Create a new dictionary for each field of the embed
            var configDict = {};
            var configItems = embedConfig.match(/(\w+)="(.*?)"/gs);
            configItems.forEach(function (item) {
                var _a = item.replace(/"/g, '').split('='), key = _a[0], value = _a[1];
                // Use the property mapping to get the correct config property
                var configKey = propertyMapping[key];
                if (['maxTokens', 'temperature', 'topP', 'boxRows'].includes(configKey)) {
                    configDict[configKey] = Number(value);
                }
                else {
                    configDict[configKey] = value;
                }
            });
            // Validate and create UrlConfig
            var validatedConfig;
            try {
                validatedConfig = urlConfigSchema.validateSync(configDict);
            }
            catch (error) {
                console.log('Error in validation:', error);
                return match; // If validation fails, return the original embed
            }
            // Here you can use validatedConfig which is of type UrlConfig
            var jsxCode = createEmbedCode(validatedConfig);
            console.log(filePath, validatedConfig, jsxCode);
            // Return the new embed to replace the old one
            return jsxCode;
        });
        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedData, 'utf8');
    });
}
processDirectory('../i18n');
