import React from 'react'
import { Task } from '../Task/Task'

export const TaskList = ({ tasks, deleteTask, toggleReminder }) => {
    return (
        <>
            { tasks.map(task => <Task task={task} 
                                    key={task.id} 
                                    onDelete={deleteTask} 
                                    onToggle={toggleReminder}
                                />
            ) }  
        </>
    )
}
