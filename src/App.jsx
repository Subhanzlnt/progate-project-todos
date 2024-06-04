import React, { useState, useEffect } from 'react';
import { getTodos, changeTodoStatus } from './database/Todolist';
import TodoList from './components/TodoList';
import './main.css';

const App = () => {
  const [todos, setTodos] = useState(getTodos());

  const handleStatus = (id) => {
    setTodos(changeTodoStatus(id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-white shadow-xl border-4">
        <div className="card-body">
          <h3 className="card-title text-center text-3xl mb-4">
            Todo App
          </h3>
          <TodoList todos={todos} handleStatus={handleStatus} />
        </div>
      </div>
    </div>
  );
};

export default App;
