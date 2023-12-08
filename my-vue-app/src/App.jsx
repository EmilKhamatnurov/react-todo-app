import 
  React, { 
  useState, 
  useEffect } 
from 'react';
import Loader from './Loader';
import { getTasks } from './Api/tasks';
/* 
  CRUD операции 
  C create 
  R reade
  U update
  D delete 

  Являются показателем к польнофункциональному приложению
*/
// https://jsonplaceholder.typicode.com/todos - сайт списка из 200 задач
/* 
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
*/

function App() {
  // States
  const [tasks, setTasks] = useState(null);
  const [isToDosLoading, setIsToDosLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  
  // Fetch
  useEffect(() => {
    setIsToDosLoading(false);

    // Получение списка задач
    getTasks()
      .then(todos => {
        setIsToDosLoading(false);
        setTasks(todos);
      })
      .catch(() => {
        setIsLoadingError(true);
        setIsToDosLoading(false);
      });
  }, []);

  // Render
  return(
    <div>
      <h1>Список задач</h1>
      {isToDosLoading && <Loader/>}
      {isLoadingError && "Ошибка загрузки данных"}
      {/* TASK LIST */}
      {tasks && tasks.map(task => (
          <li key={task.id}>
            <p>{task.title}</p>
          </li>
        ))}
    </div>
  )
}

export default App
