import React, { useState, useEffect } from 'react';
import Loader from './Loader';
/* 
  CRUD операции 
  C create 
  R reade
  U update
  D delete 

  Являются показателем к польнофункциональному приложению
*/
// https://jsonplaceholder.typicode.com/todos - сайт списка из 200 задач
const mockToDos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    },
  {
    userId: 1,
    id: 2,
    title: "delectus aut autem",
    completed: false
    }
]

function App() {
  const [tasks, setTasks] = useState(null);
  const [isToDosLoading, setIsToDosLoading] = useState(false);
  
  useEffect(() => {
    setIsToDosLoading(true);
    setTasks(mockToDos)
    setIsToDosLoading(false);
  }, []);

  return(
    <div>
      <h1>Список задач</h1>
      {isToDosLoading && <Loader/>}
      {
        tasks && tasks.map(task => (
          <li key={task.id}>
            <p>{task.title}</p>
          </li>
        )) 
      }
    </div>
  )
}

export default App
