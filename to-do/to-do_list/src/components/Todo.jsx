import { useState } from "react";
import "../App.css"

const Todo = () => {
  // todo list
  const [todos, setTodos] = useState([]);
  // current todo 
  const [currentTodo, setCurrentTodo] = useState('');

  const handleSubmit = (event) => {
    // stop reloading when submit the input
    event.preventDefault();
  }

  const handleChange = (v) => {

    setCurrentTodo(v);

  }

  const handleTodo = () => {
    if (currentTodo.trim() === '') {
      alert('fill the input first');
    } else {
      const newTodo = [...todos, currentTodo];
      setTodos(newTodo)
      setCurrentTodo('');
      console.log('submit');
    }
  }

  const deleteTodo = (index) => {
    // v = value of iterator jisme todo list ki value aa rhi hogi
    // i = index value of todo list array;
    const updateTodo = todos.filter((v, i) => i !== index);
    setTodos(updateTodo)
  }


  return (
    <div>
      <div className="main_div">
        <div className="container">
          <h1>Todo App</h1>
          <form id="todo-form" onSubmit={handleSubmit}>
            <input type="text" id="todo-input" placeholder="Enter a new task" value={currentTodo} onChange={(e) => handleChange(e.target.value)} required />
            <button type="submit" onClick={handleTodo} id="todo-submit">Add</button>
          </form>
          
          {
            todos.map((v, i) =>
              <ul id="todo-list">
                <li key={i}><span>{v}</span> <input type="checkbox" id='delete_btn' placeholder="dlt" onChange={() => deleteTodo(i)}/></li>
              </ul>)
          }

          </div>
        </div>
      </div>
  )
}

export default Todo