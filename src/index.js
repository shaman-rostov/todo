import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';




const App =() => {
    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Make Awesome App', important: true},
        {label: 'Have a lunch', important: false},
    ];
    const isLoggedIn = true;
    const loginBox =<span>Log in please</span>;
    return (
        <div>
            {isLoggedIn ? null : loginBox }
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));