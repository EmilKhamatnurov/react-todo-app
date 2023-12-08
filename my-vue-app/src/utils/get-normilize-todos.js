export function getNormilizedToDos(todos) {
    const ids = [];
    const byIds = {};

    todos.map(task => {
      ids.push(task.id);
      byIds[task.id] = task;
    })
    return [ids, byIds];
}