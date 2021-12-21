import React from 'react';
import TodoItem from './TodoItem';
import './TodoContainer.css';

export default React.memo(function TodoContainer ({ todos, deleteTodo }) {
  console.log("TodoContainer");
  return (
    <ul className='list-container'>
      {todos.map((todoItem) => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} deleteTodo={deleteTodo} />
      })}
    </ul>
  )
})