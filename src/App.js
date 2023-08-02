import React  from 'react';
import Header from './Components/Header';
import AddTask  from './Components/AddTask';
import TaskList from './Components/TaskList'
import './App.css';
import { useState , useEffect} from 'react';
import { v4 as uuid } from 'uuid'

function App() {
  const KEY='tasks'
  const [tasklist]= useState(localStorage.getItem(KEY))
  const [tasks, setTasks]= useState(JSON.parse(tasklist))
  
  const addHandler= (task)=>{
    const newTasks= [...tasks, {id: uuid(), ...task}]
   
    setTasks(newTasks)
  }

  const removeHandler= (id)=>{

    const updatedTaskList = tasks.filter((task)=>
    {
      if (task.id !== id) {
        return true
      }
    })
    console.log(updatedTaskList)
    setTasks(updatedTaskList)
  }
 
  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(tasks))
  },[tasks])
 

  return (
    <div className ="h-screen flex items-center justify-center ">
      <div className='app shadow-2xl justify-center'> 
      <div className='main'>
      <Header />
      <AddTask addHandler= {addHandler}/> 
      <div className="list-items flex flex-col py-3">
      <TaskList tasks= {tasks} getId= { removeHandler } /> 
      </div>
      </div>
        
      </div>
    </div>
  );
}



export default App;
