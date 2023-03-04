---
sidebar_position: 2
---
# 🟢 Dando Instrucciones 

Uno de los métodos de indicaciones más simples es dar instrucciones. Ya vimos una instrucción simple
en un apartado anterior (`¿Cuánto es 1.000.000 * 9.000? Asegúrate de poner la cantidad correcta de ceros, aunque sean muchos:`). Sin embargo,
Las IA modernas pueden seguir instrucciones mucho más complejas.

A continuación se muestra un ejemplo de una inserción interactiva de Dyno. Si no lo ve, asegúrese de activar Javascript en su navegador. Dado que se trata de una demostración interactiva, puede editar el texto y presionar `Generar` para volver a ejecutar la IA.

#### Ejemplo 1

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Un usuario ha ingresado su nombre y apellido en un formulario. Nosotros no sabemos en que orden esta \nSu nombre/apellido, pero necesitamos que tenga el formato 'Apellido, Nombre'. Convierta lo siguiente:\n\njohn doe" initial-response="Doe, John" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

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
