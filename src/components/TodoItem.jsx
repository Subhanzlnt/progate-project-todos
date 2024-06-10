import React from 'react';

const TodoItem = ({ todo, handleStatus, handleDelete }) => {
  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.done ? 'line-through' : 'none'
    };
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <p style={getTodoTitleStyle()}>{todo.text}</p>
      <div>
        <button 
          className="btn btn-primary btn-sm mr-2" 
          onClick={() => handleStatus(todo.id)}>
          {todo.done ? 'Undo' : 'Complete'}
        </button>
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
