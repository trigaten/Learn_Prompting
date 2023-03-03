---
sidebar_position: 2
---
# 🟢 Da instrucciones

Uno de los métodos más simples de prompting es solo dar instrucciones. Ya vimos una instrucción simple
en una sección anterior (`¿Cuanto es 1,000,000 * 9,000? Asegúrate de poner la cantidad correcta de ceros, incluso si hay muchos:`). Sin embargo,
los AIs modernos pueden seguir instrucciones mucho más complejas.

A continuación se muestra un ejemplo de lo que es un Dyno interactive embed. Si no lo ve, asegúrese de activar Javascript en su navegador. Como se trata de una demo interactiva, puede editar el texto y hacer clic en `Generar` para volver a ejecutar la IA.

#### Ejemplo 1

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Un usuario ha ingresado su nombre y apellido en un formulario. No sabemos en qué orden está su primer / apellido, pero necesitamos que esté en el formato 'Apellido, Nombre'. Convertir lo siguiente:\n\njohn doe" initial-response="Doe, John" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

<br/>La IA puede resolver fácilmente este problema. Usando la instrucción de comando, puede resolver muchos otros
problemas simples y más complejos.

#### Ejemplo 2

Aquí hay un ejemplo más complicado [^1]:

```
Lea el siguiente correo electrónico de ventas. Elimine cualquier información de identificación personal (PII),
y reemplácelo con el marcador de posición correspondiente. Por ejemplo, reemplace el nombre "John Doe"
con "[NOMBRE]".

Hola John,

Te escribo porque noté que compraste recientemente un automóvil nuevo. Soy un vendedor
en un concesionario local (Cheap Dealz), y quería informarte que tenemos una gran oferta en un auto nuevo.
Si está interesado, por favor hágamelo saber.

Gracias,

Jimmy Smith

Teléfono: 410-805-2345
Correo electrónico: jimmysmith@cheapdealz.com
```

Aquí la [IA responde](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hola [NOMBRE],

Te escribo porque noté que compraste recientemente un automóvil nuevo. Soy un vendedor
en un concesionario local ([CONCESIONARIO]), y quería informarte que tenemos una gran oferta en un auto nuevo.
Si está interesado, por favor hágamelo saber.

Gracias,

[VENDEDOR]

Teléfono: [NÚMERO DE TELÉFONO]
Correo electrónico: [DIRECCIÓN DE CORREO ELECTRÓNICO]
// highlight-end
```

Es muy interesante ver cómo el modelo puede extrapolar de las instrucciones. Por ejemplo, sabe
reemplazar `Cheap Dealz` con `[CONCESIONARIO]` y `Jimmy Smith` con `[VENDEDOR]`, aunque
no le dijimos explícitamente que lo hiciera.

[^ 1]: Permitir que el AI elimine PII del texto es un enfoque prometedor, pero debe usarse con extraordinaria precaución, ya que puede cometer errores.


## Notes 

🚧 This page needs citations 🚧