import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';

// Ej img: import logoMenu from '../images/ico-menu.svg';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Comprar aceite", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Recoger ropa", completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("los usuarios buscan todos de " + searchValue);

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

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
