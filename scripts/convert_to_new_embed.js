const fs = require('fs');

// Función para codificar la configuración de la URL
const encodeUrlConfig = (obj) => {
    let str = JSON.stringify(obj);
    console.log(str)
    let encoder = new TextEncoder();
    let data = encoder.encode(str);
    let base64 = btoa(String.fromCharCode.apply(null, data));
    return encodeURIComponent(base64);
}

// Leer el archivo .mdx
fs.readFile('../i18n/es/docusaurus-plugin-content-docs/current/basic_applications/zapier_for_emails.md', 'utf8', function(err, data) {
    // console.log(data)
    if (err) throw err;

    // Extraer la configuración del objeto de incrustación
    let embedConfig = data.match(/<div trydyno-embed.*?>(.*?)<\/div>/s)[1];

    // Codificar la configuración de la URL
    let encodedConfig = encodeUrlConfig(embedConfig);

    // Crear la nueva incrustación
    let newEmbed = `<iframe src="https://embed.learnprompting.org/embed?config=${encodedConfig}" style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}} sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>`;

    // Reemplazar la antigua incrustación con la nueva en el archivo .mdx
    let newData = data.replace(/<div trydyno-embed.*?>(.*?)<\/div>/s, newEmbed);

    // Escribir el nuevo contenido en el archivo .mdx
    fs.writeFile('../i18n/es/docusaurus-plugin-content-docs/current/basic_applications/zapier_for_emails.md', newData, 'utf8', function(err) {
        if (err) throw err;
        console.log('El archivo .mdx ha sido actualizado con éxito.');
    });
});