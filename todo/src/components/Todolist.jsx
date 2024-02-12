import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




const Todolist = () => {
  const[tasks, SetTask] = useState([]);
  const[input, SetInput] = useState('')

  const addTask = () => {
    
      const update = ([...tasks, input])
      SetTask(update);
      SetInput('');
   
}

const removeTask = (index) => {


    const update = tasks.filter((_, i) => i !== index);
    SetTask(update);
 
  }
  return (
    <>
      <h1 className="blue">Todolist</h1>
      <input type="text" value={input} onChange={(e) => SetInput(e.target.value)} autoFocus/>
      <button type="submit"onClick={addTask} >add</button>
    <div>
      {tasks.length === 0 ? (
        <p>there is no task available</p>
      ) : ( <ul>
        {tasks.map((task, index) => ( <li key={index}>{task}<button type="submit" onClick={() => removeTask(index)}>remove</button> </li>
      ))}
      </ul> )}
      
    </div>
    </>
  )
}

export default Todolist;