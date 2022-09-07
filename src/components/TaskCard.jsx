/*
function TaskCard({task}) {
  return (
    <div >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard; 
*/

//**************** ELIMINAR TAREAS *************************
/*
function TaskCard({task}) {
  function mostrarAlerta(){
    alert('Eliminando...')
  }
  return (
    <div >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={mostrarAlerta}>
        Eliminar tarea
      </button>

    </div>
  );
}

export default TaskCard; 
*/
/*
function TaskCard({task, deleteTask}) {
  return (
    <div >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={deleteTask}>
        Eliminar tarea
      </button>

    </div>
  );
}

export default TaskCard; 
*/
/*
function TaskCard({task, deleteTask}) {
  return (
    <div >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>deleteTask(task.id)}>
        Eliminar tarea
      </button>

    </div>
  );
}

export default TaskCard; 
*/

//************************ createContext **********************
/*
import TaskContext from "../context/TaskContext";
function TaskCard({ task, deleteTask }) {
  return (
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
    </TaskContext>
  );
}

export default TaskCard;
*/
/*
import TaskContext from "../context/TaskContext";

function TaskCard({ task, deleteTask }) {
  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
  )
}

export default TaskCard;
*/
/*
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task, deleteTask }) {

  const valor = useContext(TaskContext)

  console.log(valor)

  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
  )
}

export default TaskCard;
*/
/*
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task, deleteTask }) {

  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
  )
}

export default TaskCard;
*/

//**************** USE CONTEXT ****************************************
/*
import {useContext} from "react"
import {TaskContext} from "../context/TaskContext"

function TaskCard({ task }) {
  
  const {deleteTask}=useContext(TaskContext)

  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
  )
}

export default TaskCard;
*/

//**************************** TailwindCSS 40:30:04 ********************

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm"> {task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
