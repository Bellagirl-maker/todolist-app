import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="App">
      <div className='addTask'>
        <input></input>
        <button>Add Task</button>
      </div>
      
    </div>
  );
}

export default App;
