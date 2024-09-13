# To-Do List

Este proyecto es una aplicación de gestión de tareas creada en React, que permite a los usuarios agregar, buscar, completar y eliminar tareas. Además, cuenta con la funcionalidad de almacenamiento local usando `localStorage`, para mantener las tareas persistentes incluso después de cerrar el navegador.

## Funcionalidades

- **Añadir tareas**: Los usuarios pueden agregar nuevas tareas a la lista.
- **Buscar tareas**: La barra de búsqueda permite filtrar las tareas por texto.
- **Completar tareas**: Los usuarios pueden marcar las tareas como completadas.
- **Eliminar tareas**: Las tareas pueden ser eliminadas de la lista.
- **Almacenamiento local**: Las tareas se guardan en `localStorage` para asegurar la persistencia.
- **Modal**: Al agregar una tarea, se usa un modal para introducir el nuevo texto.
- **Skeleton loading**: Simulación de carga cuando se inicializan los datos.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- **components**: Todos los componentes reutilizables como `TodoCounter`, `TodoList`, `TodoItem`, entre otros.
- **context**: Usamos el contexto de React (`TodoContext`) para manejar el estado global de la aplicación.
- **custom hooks**: Implementación del hook `useLocalStorage` para el manejo del estado y la interacción con `localStorage`.
- **Modal**: Se utiliza React Portals para renderizar el modal fuera del árbol de componentes principal.

## Uso
- Haz clic en el botón "Añadir tarea" para abrir el modal y agregar una nueva tarea.
- Usa la barra de búsqueda para filtrar las tareas existentes.
- Marca una tarea como completada haciendo clic en el ícono de completar.
- Elimina tareas de la lista con el ícono de eliminar.
