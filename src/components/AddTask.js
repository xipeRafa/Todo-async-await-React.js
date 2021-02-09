import { useState,useEffect } from 'react'

const AddTask = ({ onAdd,setEdit, Edit,todoEdit,onDelete}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  useEffect(() => {
    if(Edit){setText(Edit.text)}
    if(Edit){setDay(Edit.day)} 
   
  }, [Edit]);

  const onSubmit = () => {
    
  
 

    if (!text) {
      alert('Please add a task')
      return
    }

    
     
  onAdd({ text, day, reminder })

    if(Edit){onDelete(Edit.id)}


  

    setText('')
    setDay('')
    setReminder(false)

    setEdit(null)
   
  }

 

 

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <button type='submit' className='btn btn-block'>
            {Edit ? "Edit task":"Save task"} 
      </button>
      {Edit?"Editando":"yeaa!!"}
    </form>
  )
}

export default AddTask
