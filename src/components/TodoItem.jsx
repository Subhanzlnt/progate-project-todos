import React from 'react';

const TodoItem = ({ todo, handleStatus }) => {
  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.done ? 'line-through' : 'none'
    };
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <p style={getTodoTitleStyle()}>{todo.text}</p>
      <button 
        className="btn btn-primary btn-sm" 
        onClick={() => handleStatus(todo.id)}>
        {todo.done ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TodoItem;
