const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function getTasks() {
    return fetch(`${BASE_URL}/todos`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка запроса на сервер")
      }
      return response.json()}) 
}

export function deleteTask(taskId) {
  fetch(`${BASE_URL}/todos/${taskId}`, {
  method: 'DELETE',
});
}

export function updateTask(task) {
  fetch(`${BASE_URL}/todos/${task.id}`, {
  method: 'PUT',
  body: JSON.stringify(task),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
}

export function addTask(task) {
  return fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка запроса на сервер")
    }
    return response.json()}) 
}