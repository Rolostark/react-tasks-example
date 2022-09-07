/*
function TaskContext(props) {
  return (
   <>
   <h1>Component Context</h1>
   {props.children}
   </>
  )
}

export default TaskContext
*/
/*
import {createContext} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    return (
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
  }
  
  export default TaskContext
*/
/*
import {createContext} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    let x = 20
    return (
        <TaskContext.Provider value={x}>
            {props.children}
        </TaskContext.Provider>
    )
  }
  
  export default TaskContext
  */

  //************** USE CONTEXT **********************************

import {createContext,useState,useEffect} from 'react'
import { tasks as data} from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
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

    useEffect(()=>{
        setTasks(data)
      }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>{props.children}</TaskContext.Provider>
    )
  }

  export default TaskContext