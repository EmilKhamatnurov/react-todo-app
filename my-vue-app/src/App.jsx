import 
  React, { 
  useState, 
  useEffect } 
from 'react';
import Loader from './Loader';
import Task from './components/Task/Task';
import { getTasks, deleteTask } from './Api/tasks';
import { getNormilizedToDos } from './utils/get-normilize-todos';


function App() {
  // States
  const [tasksIds, setTasksIds] = useState(null);
  const [tasksByIds, setTasksByIds] = useState({});
  const [isToDosLoading, setIsToDosLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  
  // Fetch
  useEffect(() => {
    setIsLoadingError(false);
    setIsToDosLoading(true);

    // Получение списка задач
    getTasks()
      .then(todos => {
        const [ids, byIds] = getNormilizedToDos(todos);
        setTasksIds(ids);
        setTasksByIds(byIds);
        setIsToDosLoading(false);
      })
      .catch(() => {
        setIsLoadingError(true);
        setIsToDosLoading(false);
      });
  }, []);

  // Functions
  function handleTaskDeleteBtnClick(taskId) {
   setTasksIds(tasksIds.filter((id) => id !== taskId));
   deleteTask(taskId)
  }

  function handleTaskCheckboxClick(e, id) {
    const isChecked = e.target.checked;
    console.log(e.target.checked);
    setTasksByIds(
      
    )
  }
  // Render
  return(
    <div>
      <h1>Список задач</h1>
      {isToDosLoading && <Loader/>}
      {isLoadingError && "Ошибка загрузки данных"}
      {/* TASK LIST */}
      {tasksIds && tasksIds.map(id => (
        <Task
          key={id}
          task={tasksByIds[id].title}
          onDeleteBtnClick={() => handleTaskDeleteBtnClick(id)}
          onCheckboxClick={(e, id) => handleTaskCheckboxClick(e, id)}/>
        ))}
    </div>
  )
}

export default App
