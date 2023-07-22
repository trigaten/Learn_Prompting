import * as fs from 'fs';
import * as yup from 'yup';

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
});

type UrlConfig = yup.InferType<typeof urlConfigSchema>;

const encodeUrlConfig = (obj: UrlConfig): string => {
    let str = JSON.stringify(obj);
    let encoder = new TextEncoder();
    let data = encoder.encode(str);
    let base64 = btoa(String.fromCharCode.apply(null, data as any));
    return encodeURIComponent(base64);
}

const JSX_TEMPLATE = `<iframe
    src="%URL%"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`

const BASE_URL = 'http://embed.learnprompting.org'; // Reemplaza esto con tu URL base real

const createEmbedCode = (config: UrlConfig): string => {
    const query = encodeUrlConfig(config)
    const url = `${BASE_URL}/embed?config=${query}`
    return JSX_TEMPLATE.replace("%URL%", url)
}

// Leer el archivo .mdx
fs.readFile('../i18n/es/docusaurus-plugin-content-docs/current/basic_applications/zapier_for_emails.md', 'utf8', function(err, data) {
    if (err) throw err;

    // Extraer la configuración del objeto de incrustación
    let embedConfig = data.match(/<div trydyno-embed(.*?)<\/div>/s)[1];

    // Crear un diccionario para cada campo de la incrustación
    let configDict: { [key: string]: string } = {};
    let configItems = embedConfig.match(/(\w+)="(.*?)"/g);
    configItems.forEach(item => {
        let [key, value] = item.replace(/"/g, '').split('=');
        configDict[key] = value;
    });

    // Validar y crear UrlConfig
    urlConfigSchema.validate(configDict)
        .then(function(validatedConfig) {
            // Aquí puedes usar validatedConfig que es de tipo UrlConfig
            const jsxCode = createEmbedCode(validatedConfig);
            console.log(jsxCode);
        })
        .catch(function(error) {
            console.log('Error en la validación:', error);
        });
});