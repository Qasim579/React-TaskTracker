import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'feb 4 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Cycling',
      day: 'feb 4 2021',
      reminder: true,
    },
    {
      id: 3,
      text: 'Dinner',
      day: 'feb 4 2021',
      reminder: false,
    }
  ])

  //add task

  const addTask  = (task)=>{
    const id  = Math.floor(Math.random()*1000)+1
    const newTask ={id,...task}
    setTask([...tasks,newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder

  const toggleReminder = (id) => {
    setTask(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask onAdd = {addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task For today')}
    </div>
  );
}

export default App;
