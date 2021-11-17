import React from 'react'
import './Task.css'
import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task row clickable ${task.shouldSendReminder ? 'reminder' : ''}`} onClick={() => onToggle(task.id)}>
            <div className="column">
                <span className="title">{ task.title }</span>
                <span>{ task.date }</span>
            </div>

            <FaTimes className="clickable" onClick={() => onDelete(task.id)} />
        </div>
    )
}
