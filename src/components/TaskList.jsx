/*
import {tasks} from './tasks'

console.log(tasks)

function TaskList() {
  return (
    <div>TaskList</div>
  )
}

export default TaskList
*/
/*
import { tasks } from "./tasks";
import { useState } from "react";

console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import { tasks } from "./tasks";
import { useState } from "react";

console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import { tasks } from "./tasks";
import { useState, useEffect } from "react";

console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    setTasks(tasks)
  }, [])

  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import { tasks as data} from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    setTasks(data)
  }, [])

  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
function TaskList(props) {
  

  if(props.tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
*/

/*
function TaskList({tasks}) {
  

  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import TaskCard from "./TaskCard";
function TaskList({tasks}) {
  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import TaskCard from "./TaskCard";
function TaskList({tasks}) {
  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
*/
/*
import TaskCard from "./TaskCard";
function TaskList({tasks,deleteTask}) {
  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
*/

//**************** USE CONTEXT ****************************************

/*
import TaskCard from "./TaskCard";
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  const { tasks }=useContext(TaskContext)

  if(tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
*/
//******************* TailwindCSS 40:30:04 *****************************
import TaskCard from "./TaskCard";
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  const { tasks }=useContext(TaskContext)

  if(tasks.length === 0){
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
  }
  
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;