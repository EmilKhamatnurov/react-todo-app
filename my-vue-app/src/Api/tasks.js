const BASE_URL = 'https://jsonplaceholder.typicode.com/'
export async function getTasks() {
    return fetch(`${BASE_URL}todos`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка запроса на сервер")
      }
      return response.json()})
      
}