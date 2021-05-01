import React,{useState} from 'react'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'



const App = () => {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'meeting',
      day:'Feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id:2,
      text:'Cricket Match',
      day:'Feb 6th at 2:30pm',
      reminder:true,

    }

  ])


  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>
      task.id===id ?{...task,reminder:!task.reminder}:task
    ))
  }

  const addTask= (task)=>{
    const id=Math.floor(Math.random()*10000)+1;
    const newTask={id,...task};
    setTasks([...tasks,newTask]);

  }

  return(
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&& <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder} /> : "No Task To Show"}

    </div>
   
  )
}


export default App