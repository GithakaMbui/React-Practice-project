//import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Chama Appointment',
      day: 'Feb 12th 5pm',
      reminder: true,

    },
    {
      id: 2,
      text: 'Gym',
      day: 'Feb 13th 5pm',
      reminder: true,

    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 14th 6pm',
      reminder: false,

    },
    {
      id: 4,
      text: 'Nature walk',
      day: 'Feb 14th 5pm',
      reminder: true,

    },

  ])

  return (
    <div className="container">

      <Header />
      <Tasks tasks={tasks} />


    </div>

  );
}

//class based component practice

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class based component</h1>

//   }
// }

export default App;
