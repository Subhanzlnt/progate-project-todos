import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleStatus, handleDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleStatus={handleStatus} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
