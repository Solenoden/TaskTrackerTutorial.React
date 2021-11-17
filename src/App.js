import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from './components/Task-List/TaskList';
import { AddTask } from './components/AddTask/AddTask';
import React, { useState } from 'react'
import { StateService } from './services/state-service'

function App() {
  const [tasks, setTasks] = useState(StateService.getTasks())
  const [shouldShowAddTask, setShouldShowAddTask] = useState(false)

  function toggleReminder(taskId) {
    setTasks(tasks.map(task => {
        if (task.id === taskId) task.shouldSendReminder = !task.shouldSendReminder
        return task
    }))
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function addTask(task) {
    const id = Math.floor(Math.random() * 100000) + 1
    task = { id, ...task }
    setTasks([...tasks, task])
    onShowAddTask()
  }

  function onShowAddTask() {
    setShouldShowAddTask(!shouldShowAddTask)
  }

  return (
    <div className="container">
      <Header onShowAddTask={onShowAddTask} />
      {shouldShowAddTask ? <AddTask onAdd={addTask}/> : ''}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
