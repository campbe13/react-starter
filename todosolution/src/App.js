import React, { useState } from 'react'
import './App.css';
import Todo from './components/Todo.js'
import Form from './components/Form.js'

function App(props) {
  // { id: "todo-0", name: "Code", completed: true },
  const  [tasks, setTasks] = useState(props.tasks)
  const taskstodo = tasks.map(task =>
    <Todo text={task.name} id={task.id} 
     check={task.completed} key={task.id}/>
    )
  function  addTask(name) {
    const newTask = { id : "dummy", name: name, completed: false };
    setTasks([...tasks, newTask])
    //alert(name)
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskstodo}
      </ul>
    </div>
  );
}
export default App;
