import './AddTask.css'
import { useState } from 'react'

export const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [shouldSendReminder, setShouldSendReminder] = useState(false)

    function onSubmit(event) {
        event.preventDefault()

        if (!title) {
            alert('Please add a task')
            return
        }

        onAdd({ title, date, shouldSendReminder })

        setTitle('')
        setDate('')
        setShouldSendReminder(false)
    }

    return (
        <form className="task-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input placeholder="eg; Grocery shopping" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />
            </div>   
            <div className="form-control">
                <label>Day & Time</label>
                <input placeholder="eg; 13th September at 5:30am" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control-checkbox">
                <input type="checkbox" 
                    value={shouldSendReminder} 
                    checked={shouldSendReminder}
                    onChange={(e) => setShouldSendReminder(e.target.value)}/>
                <label>Remind me</label>
            </div>

            <button type="submit">Add task</button>
        </form>
    )
}