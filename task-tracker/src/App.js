import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
  const [tasks,setTask] = useState([
    {
        id:1,
        text:'Doctor Appointment',
        day:'feb 4 2021',
        reminder:true,
    },
    {
        id:2,
        text:'Cycling',
        day:'feb 4 2021',
        reminder:true,
    },
    {
        id:3,
        text:'Dinner',
        day:'feb 4 2021',
        reminder:false,
    }
])

  return (
    <div className="container">
      <Header title = 'Task Tracker' />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
