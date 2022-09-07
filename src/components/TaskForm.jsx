/*
function TaskForm() {
  return (
        <form>
            <input placeholder="Escribe tu tarea"/>
            <button>
                Guardar
            </button>
        </form>
  )
}

export default TaskForm
*/
/*
function TaskForm() {
  return (
        <form>
            <input placeholder="Escribe tu tarea"
            onChange={(e) => console.log(e.target.value)}
            />
            <button>
                Guardar
            </button>
        </form>
  )
}

export default TaskForm
*/
/*
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const handleSubmit =()=>{
    console.log(title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm(createTask) {
  const [title, setTitle] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    const newTask={
      title
    }
    console.log(newTask)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

*/
/*
import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    const newTask={
      title,
      id:4,
      description: "algo nuevo"
    }
    createTask(newTask)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask(title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

*/
/*
import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

*/
/*
import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
/*
import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/
//*************************** createContext ******************************************
/*
import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor =useContext(TaskContext)
  console.log(valor)

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/

//**************** USE CONTEXT ****************************************
/*
import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
*/

//**************************** TailwindCSS 40:30:04 ********************
import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 " >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea placeholder="Ecribe la descripcuion de la tarea "
      onChange={(e) => setDescription(e.target.value)}
      className="bg-slate-300 p-3 w-full mb-2"
      value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;


