//import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from "./components/Footer"
import About from "./components/About"

function App() {

  const [showAddTask, setShowAddTask] = useState(true)

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: 'Chama Appointment',
  //     day: 'Feb 12th 5pm',
  //     reminder: true,

  //   },
  //   {
  //     id: 2,
  //     text: 'Gym',
  //     day: 'Feb 13th 5pm',
  //     reminder: true,

  //   },
  //   {
  //     id: 3,
  //     text: 'Shopping',
  //     day: 'Feb 14th 6pm',
  //     reminder: false,

  //   },
  //   {
  //     id: 4,
  //     text: 'Nature walk',
  //     day: 'Feb 14th 5pm',
  //     reminder: true,

  //   },

  // ])

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }

    getTasks()
  }, [])

  //Fetch data from json server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    //console.log(data)
    return data
  }

  //Fetch a single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  }

  //Add Task in the form
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }


  //Delete Task Function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    //console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">

        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}


          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>

  );
}

//class based component practice

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class based component</h1>

//   }
// }

export default App;
