import './CreateTodoButton.css';

function CreateTodoButton() {

  return (
    <button
      className='CreateTodoButton'
      onClick={
        (event) => {
          event.preventDefault();
          console.log("le diste click");
          console.log(event.target);
        }}
    >+</button>
  )
}

export { CreateTodoButton };