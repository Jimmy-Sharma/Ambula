import React, { useState } from 'react'
import Navbar from '../pages/Navbar'
import '../Styling/Todo.css'

const Todo = () => {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [count, setCount] = useState(0)

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setCount((prev)=>  prev+1)
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.completed)
    : tasks.filter((task) => !task.completed);

console.log(tasks)
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id='todoCon'>
        <div id='todoContainer'>
          <div>
            <h1>Total No. Of Tasks : {tasks.length}</h1>
            <h1>No. Of Completed Tasks : { count}</h1>
          </div>
          <div id='inputDiv'>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter a task"
              id='inputTask'
            />
            <button id='submitTask' onClick={addTask}>Add Task</button>
          </div>
          <table id='todoTable'>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index} id='bodyMap'>
                  <td>{index+1}.</td>
                  <td
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                  >
                    {task.text}
                  </td>
                  <td>
                    <button id='todoDltBtn' onClick={() => deleteTask(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Todo