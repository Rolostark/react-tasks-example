/*
import TaskList from './TaskList'

function HolaMundo() {
  return (
    <div>
      <TaskList/>
      </div>
  )
}

export default HolaMundo
*/

//***********  AÑADIR TAREA DESDE FORMULARIO  *******************
/*
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function HolaMundo() {
  return (
    <>
      <TaskForm/>
      <TaskList/>
    </>
  )
}
  
export default HolaMundo
*/
/*
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data} from "./tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  return (
    <>
      <TaskForm/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App;

*/
/*
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data} from "./tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks,task])
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App;
*/
/*
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data} from "./tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "nueva tarea"
    }])
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  function deleteTask(){
    console.log(tasks)
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  function deleteTask(taskId){
    console.log(tasks)
    console.log(taskId)
  }


  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  function deleteTask(taskId){
    tasks.filter(task => task.id !== taskId)
  }


  return (
    <>
      <TaskForm createTask={createTask}/> 
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
*/

//*******   createContext *****************
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  
  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask}/> 
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
*/
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from "./data/tasks";
import {useState,useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  function deleteTask(taskId){
    tasks.filter(task => task.id !== taskId)
  }


  return (
    <>
      <TaskForm createTask={createTask}/> 
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
*/

//****** USE CONTEXT ********************************
/*
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <>
      <TaskForm/> 
      <TaskList/>
    </>
  )
}

export default App;
*/
//******************* TailwindCSS 40:30:04 *****************************

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm/> 
        <TaskList/>
      </div>
      
    </main>
  )
}

export default App;
 