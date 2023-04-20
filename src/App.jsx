import { useState, useEffect } from 'react';
import {Table} from './components/Tabla'

import { CreadorDeTareas } from './components/CreadorDeTareas';

import './App.css'



 
function App() {

  const [taskItems, setTaskItems] = useState([]);

 

  function createNewTask (taskName)
{
    
 if (!taskItems.find(task => task.name === taskName)) {
 setTaskItems([...taskItems,{name: taskName,done:false}])
    }
  }
  
  const actualizar = task => {
    setTaskItems (
  taskItems.map ((t) => (t.name === task.name ? {...t, done: !t.done}:t)
))}

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
     setTaskItems(JSON.parse(data)) 
    }
  },[])
  useEffect(() => {
 localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])
  
  return (
    <div className="App">
      
      <h1>Lista de Tareas</h1>

      <CreadorDeTareas createNewTask= {createNewTask} />
     
      <Table tareas={taskItems} actualizar = {actualizar} />
    </div>
  )
}

export default App;
