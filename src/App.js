import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// Ej img: import logoMenu from '../images/ico-menu.svg';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Comprar aceite", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Recoger ropa", completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );



}
export default App;
