import 
  React, { 
  useState, 
  useEffect } 
from 'react';
import Loader from './Loader';
import { getTasks } from './Api/tasks';
import { getNormilizedToDos } from './utils/get-normilize-todos';
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
_______________________________
const ids = [1, 2];
const mockToDos Right = [
  1: {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    },
  2: {
    userId: 1,
    id: 2,
    title: "delectus aut autem",
    completed: false
    }
]
*/

function App() {
  // States
  const [tasksIds, setTasksIds] = useState(null);
  const [tasksByIds, setTasksByIds] = useState({});
  const [isToDosLoading, setIsToDosLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  
  // Fetch
  useEffect(() => {
    setIsToDosLoading(false);

    // Получение списка задач
    getTasks()
      .then(todos => {
        const [ids, byIds] = getNormilizedToDos(todos)
        setTasksIds(ids);
        setTasksByIds(byIds);
        setIsToDosLoading(false);
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
      {tasksIds && tasksIds.map(id => (
          <li key={id}>
            <p>{tasksByIds[id].title}</p>
          </li>
        ))}
    </div>
  )
}

export default App
