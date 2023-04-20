import { useState } from 'react';

 



export const CreadorDeTareas = ({createNewTask}) => {

     const [nuevaTarea, setnuevaTarea] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault()
      createNewTask(nuevaTarea)
   
    setnuevaTarea('')
  }
    return (


        
     <form onSubmit={ handleSubmit } >
         <input type="text" placeholder='introduce una tarea' value={nuevaTarea} onChange={(e) => setnuevaTarea(e.target.value)}  className='entrada'/>
  
      <button >agregar</button>
     </form>)
}