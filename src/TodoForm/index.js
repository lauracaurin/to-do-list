import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {

  const [newTodoValue, SetNewTodoValue] = React.useState('')

  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }

  const onChange = (event) => {
    SetNewTodoValue(event.target.value);

  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>

      <div className="TodoForm-button--container">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };