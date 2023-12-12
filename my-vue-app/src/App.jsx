import 
  React, { 
  useState, 
  useEffect } 
from 'react';
import { 
  getTasks, 
  deleteTask, 
  updateTask, 
  addTask } 
from './Api/tasks';
import Loader from './Loader';
import Task from './components/Task/Task';
import { getNormilizedToDos } from './utils/get-normilize-todos';


function App() {
  // States
  const [tasksIds, setTasksIds] = useState(null);
  const [tasksByIds, setTasksByIds] = useState({});
  const [isToDosLoading, setIsToDosLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
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
  function handleDeleteTask(taskId) {
   setTasksIds(tasksIds.filter((id) => id !== taskId));
   deleteTask(taskId)
  }

  function handleToggleTask(id) {
    const todo = {
      ...tasksByIds[id],
        completed: !tasksByIds[id].completed
    }
    setTasksByIds({
      ...tasksByIds,
      [id]: todo
    })
    updateTask(todo);
  }

  function handleTasakTitleInput(title) {
    setTaskTitle(title)
  }

  function handleAddTaskBtnClick() {
    const newTask = {
      title: taskTitle,
      completed: false
    }

    addTask(newTask)
      .then(todo => {
        setTasksByIds({
            ...tasksByIds,
            [todo.id]: todo
          })
          setTasksIds([todo.id, ...tasksIds]);

      })
      .catch(() => {
       //
      });
  }
  // Render

  return(
    <div>
      <h1>Список задач</h1>
      {isToDosLoading && <Loader/>}
      {isLoadingError && "Ошибка загрузки данных"}
      {/* TASK LIST */}
      <input 
        type="text" 
        value={taskTitle}
        onChange={(e) => handleTasakTitleInput(e.target.value)}/>
      <button onClick={handleAddTaskBtnClick}>Создать задачу</button>
      {tasksIds && tasksIds.map(id => (
        <Task
          key={id}
          task={tasksByIds[id]}
          onDelete={() => handleDeleteTask(id)}
          onToggle={() => handleToggleTask(id)}/>
        ))}
    </div>
  )
}

export default App
