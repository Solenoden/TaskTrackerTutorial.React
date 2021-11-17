import React from 'react'
import { StateService } from '../../services/state-service'

export const TaskList = () => {
    const tasks = StateService.getTasks()

    return (
        <>
            { tasks.map(task => <div>{task.title}</div>) }  
        </>
    )
}
