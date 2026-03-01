# Diseñando una Base de Datos Real: E-commerce de Cine

En los retos anteriores aprendimos a validar la información que llega a nuestra API de Express. Pero, una vez validada, ¿dónde y cómo la guardamos? 

Históricamente, muchos programadores empezaban a escribir código sin planear, lo que resultaba en bases de datos caóticas donde se perdía la información de las compras o se duplicaban los usuarios.

Hoy en día, antes de programar la conexión a la base de datos en Node.js, creamos un **Modelo Entidad-Relación (ER)**. Este plano nos permite visualizar cómo interactúan las distintas partes de nuestro negocio. 



Ya hiciste un modelo de 2 tablas (Usuarios y Notas). Ahora vamos a subir el nivel a un sistema del mundo real con al menos 4 entidades conectadas.

## Tu Misión

Vas a diseñar el modelo ER para el backend de un **Cine (Venta de boletos en línea)**. Tu plano debe mostrar cómo se relaciona el catálogo de películas con las compras de los clientes.

### Criterios de Aceptación (Checklist)
* El diagrama debe incluir exactamente 4 entidades: `Película`, `Función`, `Espectador` (Usuario) y `Boleto`.
* Cada entidad debe tener al menos 3 atributos (ej. `id`, `nombre`, etc.).
* Debe existir una relación clara donde **una Película** tenga **múltiples Funciones**.
* Debe existir una relación clara donde **un Espectador** tenga **múltiples Boletos**.
* El diagrama debe exportarse correctamente en formato PNG.

---

## Instrucciones

Para este reto, utilizaremos la herramienta que hemos utilizado en el curso [draw.io](https://app.diagrams.net/)

1. **Creando el diagrama**
   Abre tu navegador y entra a [draw.io](https://app.diagrams.net/). 
   Selecciona "Crear nuevo diagrama" -> "Diagrama en blanco". 

2. **Dibuja tus Entidades**
   En el panel izquierdo de draw.io, baja hasta encontrar la sección "Entity Relation" (o simplemente usa rectángulos básicos). 
   Crea 4 cajas, una para cada entidad de nuestro sistema:
   * **Película**
   * **Función** (El horario específico en que se proyecta la película)
   * **Espectador** (El cliente que se registra en nuestra app)
   * **Boleto** (El ticket de compra final)

3. **Agrega los Atributos**
   Dentro de cada caja, escribe los datos que tu API necesitaría guardar. 
   *Pista obligatoria:* Todas las entidades deben tener un atributo `id` (Llave Primaria).
   *Ejemplo para Película:* `id`, `titulo`, `duracion`, `clasificacion`.

4. **Conecta tu Base de Datos (Relaciones)**
   Usa las flechas o líneas de draw.io para conectar las cajas según las reglas del negocio. Para que la relación funcione, recuerda agregar **Llaves Foráneas (Foreign Keys)**.
   
   * *Regla 1:* Para relacionar una Película con sus Funciones, la tabla `Función` debe tener un atributo llamado `pelicula_id`.
   * *Regla 2:* Para saber de quién es un boleto, la tabla `Boleto` debe tener un atributo `espectador_id`.
   * *Reto extra:* ¿A qué más debe estar conectado el `Boleto` para saber qué fuimos a ver? ¡Añade esa conexión!

5. **Exporta y Entrega**
   * En draw.io, ve al menú superior: **Archivo -> Exportar como -> PNG**.
   * Nombra tu archivo exactamente así: `ER_Cine_TuNombre.png` (sustituye "TuNombre" por tu nombre real).
   * Sube esta imagen como entregable de tu clase. ¡Ya tienes la arquitectura lista para tu próxima API!