import React, { useState } from 'react'
import { StateService } from '../../services/state-service'
import { Task } from '../Task/Task'

export const TaskList = () => {
    const [tasks, setTasks] = useState(StateService.getTasks())

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    function toggleReminder(taskId) {
        setTasks(tasks.map(task => {
            if (task.id === taskId) task.shouldSendReminder = !task.shouldSendReminder
            return task
        }))
    }

    return (
        <>
            { tasks.map(task => <Task task={task} key={task.id} onDelete={deleteTask} onToggle={toggleReminder}/>) }  
        </>
    )
}
