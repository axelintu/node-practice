# Operando el Cine: Tu primer CRUD y JOIN en SQL

¡Tus tablas ya están construidas y tienes espectadores esperando en la fila! Ahora vamos a operar el cine utilizando operaciones de manipulación de datos (DML).

La operación de cualquier sistema se resume en las 4 operaciones fundamentales del **CRUD**:
* **C**reate (Insertar datos)
* **R**ead (Leer o consultar datos)
* **U**pdate (Actualizar datos)
* **D**elete (Borrar datos)

## Tu Misión

Imagina que estás en la taquilla. Tu misión es aplicar un CRUD completo sobre la tabla **`boleto`** (registrar la venta, ver los boletos, cambiar un asiento y cancelar una compra).

### Criterios de Aceptación (Checklist)
* [ ] **Create:** Vender (insertar) al menos 2 boletos nuevos usando IDs válidos.
* [ ] **Read:** Consultar los boletos vendidos usando `JOIN` para que en pantalla se vea el **nombre del espectador** y no solo su ID numérico.
* [ ] **Update:** Actualizar el asiento de un boleto existente.
* [ ] **Delete:** Cancelar (eliminar) un boleto específico.

---

## Instrucciones

Abre un nuevo script en tu gestor de base de datos llamado `reto_cine_crud.sql`. 
Asegúrate de estar usando la misma base de datos del reto anterior. Copia el esqueleto y reemplaza los comentarios:

```sql
-- ==========================================
-- RETO PARTE 2: CRUD DE BOLETOS
-- ==========================================

-- 1. CREATE (Insertar / Vender)
-- Escribe una sentencia INSERT INTO para la tabla 'boleto'.
-- VENDE 2 BOLETOS usando los espectador_id (1 o 2) y los funcion_id (1 o 2).
-- Invéntate los números de asiento (ej. 'A1', 'B4').



-- 2. READ (Consultar con JOIN)
-- Escribe una sentencia SELECT para ver todos los boletos vendidos.
-- RETO: Usa INNER JOIN para conectar la tabla 'boleto' con la tabla 'espectador'.
-- Queremos ver columnas combinadas: boleto.id, boleto.asiento, y espectador.nombre.



-- 3. UPDATE (Actualizar / Cambio de asiento)
-- Un cliente se quejó de su asiento y quiere que lo cambies.
-- Escribe un UPDATE para cambiar el campo 'asiento' de uno de tus boletos.
-- 🚨 OJO: NUNCA olvides la cláusula WHERE con el ID del boleto.



-- 4. DELETE (Eliminar / Cancelar compra)
-- Un cliente canceló su compra.
-- Escribe un DELETE FROM para borrar un boleto específico.
-- 🚨 OJO: Si olvidas el WHERE aquí, ¡borrarás todos los boletos del cine!