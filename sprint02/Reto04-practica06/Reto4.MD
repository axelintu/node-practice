# Mi servidor web nativo

En el reto anterior usamos una librería externa *(sillyname)* para facilitarnos la vida. Sin embargo, **Node.js** es muy poderoso y ya incluye "de fábrica" las herramientas necesarias para crear servidores web, sin necesidad de instalar nada extra.
Para este reto usaremos dos módulos nativos (que ya vienen instalados en Node):

1. **http:** Nos permite crear el servidor y recibir peticiones del navegador.
2. **fs (File System):** Nos permite leer archivos de tu computadora (como tu HTML).

Analicemos cómo se crea un servidor básico que responde con texto plano:

```javascript
    import http from "http";

    // Generamos una constante para almacenar la funcionalidad de http
    const server = http.createServer((req, res) => {
    // Respondemos al navegador
    res.end("Hola inadaptado desde un servidor nativo");
    });

    //El servidor nos responde
    server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
    });
```

En el ejemplo anterior, usamos http.createServer. Esta función se queda esperando a que alguien entre a tu página. Cuando eso pasa, ejecuta la función y responde con *"Hola inadaptado..."*.

## Instrucciones

Tu objetivo es seleccionar un archivo HTML que ya tengas creado (tu CV, una tarea anterior, etc.) y servirlo usando `Node.js.` Para lograrlo, no solo tendrás que crear el servidor, sino que tendrás que usar el módulo fs para leer ese archivo HTML y enviárselo al usuario.

1. **Preparación**
    - Crea una carpeta nueva para este reto
    - Copia tu archivo `html` dentro de esta carpeta. Asegúrate de nombrarlo `index.html`para facilitar las cosas.
    - Abre la terminal en esa carpeta e inicializa el proyecto: `npm init -y`
    - En el `package.json` agrega `"type":"module"` (para poder usa import)
    - *Nota: no necesitas instalar nada más*
2. **El código del servidor**
    - Crea un archivo index.js e importa los dos módulos que necesitamos para trabajar
3. **Crea el servidor y lee el archivo**
    - Vamos a crear el servidor. Dentro de la función del servidor, usaremos `fs.readFile` para buscar tu HTML. Copia y analiza el siguiente código en tu `index.js`:

    ```javascript
        const server = http.createServer((req, res) => {
        // 1. Leemos el archivo 'index.html'
        // 2. En caso de que el archivo se lea correctamente, enviarlo como respuesta
        });
    ```
4. **Escuchar en el puerto**
    - Al final de tu archivo, dile al servidor que se quede escuchando en el puerto 8080:

    ```javascript
        server.listen(8080, () => {
        console.log("Tu servidor está listo en el puerto 8080");
        });
    ```
5. **Pruébalo**
    - Ejecuta tu servidor con `node index.js`
    - Ve a tu navegador y entra a `localhost:8080`

Deberías ver tu página HTML renderizada correctamente. ¡Acabas de crear un servidor web desde cero sin usar librerías externas!