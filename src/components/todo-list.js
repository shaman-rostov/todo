import React from "react";
import TodoListItem from './todo-list-item';

const TodoList =()=> {
    const items =['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li><TodoListItem label = 'Drink coffee'/></li>
            <li><TodoListItem
                label = 'Create React App'
                important = {true} />
        </li>
        </ul>
    );
};
export default TodoList;