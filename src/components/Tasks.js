import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle,setEdit ,Edit}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} setEdit={setEdit} />
      ))}
    </>
  )
}

export default Tasks
