export const TaskRow = ({task, actualizar}) => {
  return (
    <tr >
      <td>
      
        {task.name}
        <input id="check"
          type="checkbox"
          checked={task.done}
          onChange={() => 
           actualizar(task)
          }
        />
      </td>
    </tr>
  );
};
