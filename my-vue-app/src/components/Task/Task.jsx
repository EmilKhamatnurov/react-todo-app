import React from 'react';

function Task({task, onDelete, onToggle}) {
    return (
        <li>
            <input type="checkbox" onChange={onToggle} checked={task.completed}/>
            <p>{task.title}</p>
            <button onClick={onDelete}>Удалить задачу</button>
        </li>
    );
}

export default Task;