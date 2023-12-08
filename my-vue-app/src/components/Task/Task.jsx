import React from 'react';

function Task({task, onDeleteBtnClick, onCheckboxClick}) {
    return (
        <li>
            <input type="checkbox" onChange={onCheckboxClick}/>
            <p>{task}</p>
            <button onClick={onDeleteBtnClick}>Удалить задачу</button>
        </li>
    );
}

export default Task;