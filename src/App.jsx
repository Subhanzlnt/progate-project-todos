import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './main.css';

function App() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [
    { id: 1, text: 'Belajar React', done: false },
    { id: 2, text: 'Belajar Tailwind', done: false },
    { id: 3, text: 'Belajar Next.js', done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');


  const handleStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = { id: todos.length + 1, text: newTodo, done: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
      localStorage.setItem('todos', JSON.stringify(newTodoItem));
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-center text-3xl mb-4">
            Todo App
          </h3>
          <div className="mb-4">
            <input
              type="text"
              className="input input-bordered w-full mb-2"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
            />
            <button className="btn btn-primary w-full" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
          <TodoList todos={todos} handleStatus={handleStatus} handleDelete={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
