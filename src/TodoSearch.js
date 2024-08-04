import './TodoSearch.css';


function TodoSearch() {

  return (
    <input type="text" name="" id="" placeholder="Cortar cebolla" className="TodoSearch"
      onChange={(event) => {
        console.log("escribiste en el todo search");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }} />
  )
}

export { TodoSearch };