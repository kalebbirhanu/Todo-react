import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap/Button';



const Todolist = () => {
  const[tasks, SetTask] = useState([]);
  const[input, SetInput] = useState('')

  const addTask = () => {
    if(tasks.trim() !== '') {
      const update = ([...tasks, input])
      SetTask(update);
      SetInput('');

    }
}

const removeTask = (index) => {
  if(tasks.trim !== '') {

    const update = tasks.filter((_, i) => i !== index);
    SetTask(update);
  }
  }
  return (
    <>
      <h1>Todolist</h1>
      <input type="text" value={input} onChange={(e) => SetInput(e.target.value)} autoFocus/>
      <Button type="submit"onClick={addTask} >add</Button>
    <div>
      {tasks.length === 0 ? (
        <p>there is no task available</p>
      ) : ( <ul>
        {tasks.map((task, index) => ( <li key={index}>{task}<Button type="submit" onClick={() => removeTask(index)}>remove</Button> </li>
      ))}
      </ul> )}
      
    </div>
    </>
  )
}

export default Todolist;