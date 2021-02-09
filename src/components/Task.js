import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, setEdit,Edit }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
     
      <p>{task.day}</p>
      
     
     
     <button  className='btn'
      onClick={()=>setEdit(task)}
     
      >Edit task: {task.text}</button> 
    </div>
  )
}

export default Task
