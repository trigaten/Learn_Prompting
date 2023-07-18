---
sidebar_position: 2
---

# 🟢 Dando Instrucciones

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Uno de los métodos de indicaciones más simples es dar instrucciones. We already saw a simple instruction in a previous section (`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`). Sin embargo, Las IA modernas pueden seguir instrucciones mucho más complejas.

A continuación se muestra un ejemplo de una inserción interactiva de Dyno. Si no lo ve, asegúrese de activar Javascript en su navegador. Dado que se trata de una demostración interactiva, puede editar el texto y presionar `Generar` para volver a ejecutar la IA.

#### Ejemplo 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlxuXG5TaGFoLCBBYXl1c2giLCJwcm9tcHQiOiJBIHVzZXIgaGFzIGlucHV0IHRoZWlyIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW50byBhIGZvcm0uIFdlIGRvbid0IGtub3cgaW4gd2hpY2ggb3JkZXIgdGhlaXIgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lIGFyZSwgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhpcyBmb3JtYXQgJzxMYXN0IG5hbWU%2BLCA8Rmlyc3QgbmFtZT4nLiBcblxuUGxlYXNlIGNvbnZlcnQgdGhlIGZvbGxvd2luZyBuYW1lIGluIHRoZSBleHBlY3RlZCBmb3JtYXQ6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>La IA puede resolver fácilmente este problema. Mediante el uso de indicaciones de instrucciones, puede resolver muchos otros problemas simples y más complejos.

#### Ejemplo 2

Aquí hay un ejemplo más complicado[^1]:

```
Lea el siguiente correo electrónico de ventas. Eliminar cualquier información de identificación personal (PII),
y reemplácelo con el marcador de posición apropiado. Por ejemplo, reemplace el nombre "John Doe"
con "[NOMBRE]".

Hola John,

Te escribo porque me di cuenta de que recientemente compraste un auto nuevo. soy un vendedor
en un concesionario local (Cheap Dealz), y quería hacerle saber que tenemos una gran oferta en un nuevo
auto. Si estás interesado, por favor házmelo saber.

Gracias,

Jimmy Smith

Teléfono: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

Acá esta [la respuesta de la IA](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hola [NOMBRE],

Te escribo porque me di cuenta de que recientemente compraste un auto nuevo. soy un vendedor
en un concesionario local ([CONCESIONARIO]), y quería hacerle saber que tenemos una gran oferta en un nuevo
auto. Si está interesado, por favor hágamelo saber.

[NUMERO DE TELEFONO]
Email: [EMAIL]
// highlight-end
```

Es genial ver cómo el modelo puede extrapolarse de las instrucciones. Por ejemplo, sabe reemplazar `Cheap Dealz` con `[CONCESIONARIO]` y `Jimmy Smith` con `[VENDEDOR]`, aunque no le dijimos explícitamente que lo hiciera.

[^A]: Permite que la IA elimine la PII del texto es un enfoque prometedor, pero debe usarse con extrema precaución, ya que puede cometer errores.


