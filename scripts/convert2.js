"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODELS = void 0;
var fs = require("fs");
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
});
var encodeUrlConfig = function (obj) {
    var str = JSON.stringify(obj);
    var encoder = new TextEncoder();
    var data = encoder.encode(str);
    var base64 = btoa(String.fromCharCode.apply(null, data));
    return encodeURIComponent(base64);
};
var JSX_TEMPLATE = "<iframe\n    src=\"%URL%\"\n    style={{width:\"100%\", height:\"500px\", border:\"0\", borderRadius:\"4px\", overflow:\"hidden\"}}\n    sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\n></iframe>";
var BASE_URL = 'http://embed.learnprompting.org'; // Reemplaza esto con tu URL base real
var createEmbedCode = function (config) {
    var query = encodeUrlConfig(config);
    var url = "".concat(BASE_URL, "/embed?config=").concat(query);
    return JSX_TEMPLATE.replace("%URL%", url);
};
// Leer el archivo .mdx
fs.readFile('../i18n/es/docusaurus-plugin-content-docs/current/basic_applications/zapier_for_emails.md', 'utf8', function (err, data) {
    if (err)
        throw err;
    // Extraer la configuración del objeto de incrustación
    var embedConfig = data.match(/<div trydyno-embed(.*?)<\/div>/s)[1];
    // Crear un diccionario para cada campo de la incrustación
    var configDict = {};
    var configItems = embedConfig.match(/(\w+)="(.*?)"/g);
    configItems.forEach(function (item) {
        var _a = item.replace(/"/g, '').split('='), key = _a[0], value = _a[1];
        configDict[key] = value;
    });
    // Validar y crear UrlConfig
    urlConfigSchema.validate(configDict)
        .then(function (validatedConfig) {
        // Aquí puedes usar validatedConfig que es de tipo UrlConfig
        var jsxCode = createEmbedCode(validatedConfig);
        console.log(jsxCode);
    })
        .catch(function (error) {
        console.log('Error en la validación:', error);
    });
});
