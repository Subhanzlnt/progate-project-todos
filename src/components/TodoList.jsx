// import React from 'react';
import PropTypes from 'prop-types';
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


TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleStatus: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;
