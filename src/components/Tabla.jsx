import { TaskRow } from './TaskRow'



export const Table = ({ tareas, actualizar }) => {
  const tablaTarea = (doneValue) => {

    return (
      tareas
        .filter (task => task.done === doneValue)
        .map(task => (
   <TaskRow task={task} key={task.name} actualizar={actualizar} />
        ) )
  )}
    return (
         <table>
        <thead>
          <tr>
            <th> Tareas </th>
          </tr>
        </thead>
        <tbody>
{
       tablaTarea(false)
      }
        </tbody>
      </table>
    )
}