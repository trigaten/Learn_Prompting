---
sidebar_position: 2
---
# 🟢 Dando Instrucciones 

Uno de los métodos de indicaciones más simples es dar instrucciones. Ya vimos una instrucción simple
en un apartado anterior (`¿Cuánto es 1.000.000 * 9.000? Asegúrate de poner la cantidad correcta de ceros, aunque sean muchos:`). Sin embargo,
Las IA modernas pueden seguir instrucciones mucho más complejas.

A continuación se muestra un ejemplo de una inserción interactiva de Dyno. Si no lo ve, asegúrese de activar Javascript en su navegador. Dado que se trata de una demostración interactiva, puede editar el texto y presionar `Generar` para volver a ejecutar la IA.

#### Ejemplo 1

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
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

Thanks,

[VENDEDOR]

Teléfono: [NUMERO DE TELEFONO]
Email: [EMAIL]
// highlight-end
```

Es genial ver cómo el modelo puede extrapolarse de las instrucciones. Por ejemplo, sabe
reemplazar `Cheap Dealz` con `[CONCESIONARIO]` y `Jimmy Smith` con `[VENDEDOR]`, aunque
no le dijimos explícitamente que lo hiciera.

[^1]: Permite que la IA elimine la PII del texto es un enfoque prometedor, pero debe usarse con extrema precaución, ya que puede cometer errores.


## Nota 

🚧 Esta página necesita citas 🚧
