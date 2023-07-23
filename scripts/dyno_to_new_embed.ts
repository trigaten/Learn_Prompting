// run tsc dyno_to_new_embed.ts
// then run node dyno_to_new_embed.js

import * as fs from 'fs';
import * as path from 'path';
import * as yup from 'yup';
import * as he from 'he';

export const MODELS = [
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
]

const urlConfigSchema = yup.object({
    model: yup.string().oneOf(MODELS).default(MODELS[0]),
    prompt: yup.string().default(""),
    output: yup.string().default(""),
    maxTokens: yup.number().integer().min(1).max(4000).default(256),
    temperature: yup.number().min(0).max(1).default(0.7),
    topP: yup.number().min(0).max(1).default(1),
    boxRows: yup.number().integer().min(1).default(25), // Add boxRows to the schema
});

type UrlConfig = yup.InferType<typeof urlConfigSchema>;

const encodeUrlConfig = (obj: UrlConfig): string => {
    let str = JSON.stringify(obj, (key, value) => typeof value === 'string' ? he.decode(value.replace(/\\n/g, '\n')) : value);
    let encoder = new TextEncoder();
    let data = encoder.encode(str);
    let base64 = btoa(String.fromCharCode.apply(null, data as any));
    return encodeURIComponent(base64);
}

const JSX_TEMPLATE = `<iframe
    src="%URL%"
    style={{width:"100%", height:"%HEIGHT%", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`

const BASE_URL = 'http://embed.learnprompting.org'; // Replace this with your actual base URL

const createEmbedCode = (config: UrlConfig): string => {
    const query = encodeUrlConfig(config)
    const url = `${BASE_URL}/embed?config=${query}`
    const height = config.boxRows ? `${50 * config.boxRows}px` : '500px';
    return JSX_TEMPLATE.replace("%URL%", url).replace("%HEIGHT%", height);
}

// Function to recursively iterate through all files in a given path
function processDirectory(directory: string) {
    fs.readdirSync(directory).forEach(file => {
        let fullPath = path.join(directory, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            processFile(fullPath);
        }
    });
}
// Function to process a single file
function processFile(filePath: string) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) throw err;

        // Replace each dyno embed with the new embed
        let updatedData = data.replace(/<div trydyno-embed(.*?)<\/div>/gs, function(match, embedConfig) {
            // Create a mapping from the embed properties to the config properties
            const propertyMapping = {
                'model': 'model',
                'prompt': 'prompt',
                'response': 'output',
                'tokens': 'maxTokens',
                'temp': 'temperature',
                'p': 'topP',
                'rows': 'boxRows',
            };

            // Create a new dictionary for each field of the embed
            let configDict: { [key: string]: string | number } = {};
            let configItems = embedConfig.match(/(\w+)="(.*?)"/gs);
            configItems.forEach(item => {
                let [key, value] = item.replace(/"/g, '').split('=');
                // Use the property mapping to get the correct config property
                let configKey = propertyMapping[key];
                if (['maxTokens', 'temperature', 'topP', 'boxRows'].includes(configKey)) {
                    configDict[configKey] = Number(value);
                } else {
                    configDict[configKey] = value;
                }
            });

            // Validate and create UrlConfig
            let validatedConfig;
            try {
                validatedConfig = urlConfigSchema.validateSync(configDict);
            } catch (error) {
                console.log('Error in validation:', error);
                return match; // If validation fails, return the original embed
            }

            // Here you can use validatedConfig which is of type UrlConfig
            const jsxCode = createEmbedCode(validatedConfig);
            console.log(filePath, validatedConfig, jsxCode);

            // Return the new embed to replace the old one
            return jsxCode;
        });

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedData, 'utf8');
    });
}

processDirectory('../i18n');