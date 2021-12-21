import React, { useMemo } from 'react';
import './TodoItem.css';

export default function TodoItem({ todoItem, deleteTodo }) {
  console.log("TodoItem");

  const getExpiredTime = (todoItem) => {
    console.log("--func getExpiredTime");
    const oneHour = 1000 * 60 * 60;
    const now = Date.now();
    const expired = new Date(todoItem.expired * oneHour + now);
    return `${expired.getFullYear()}년 ${expired.getMonth() + 1}월 ${expired.getDate()}일 ${expired.getHours()}시 ${expired.getMinutes()}분까지`
  };

  const expiredTime = useMemo(() => getExpiredTime(todoItem), [todoItem]);

  return (
    <li className='list-item'>
      <div>
        {todoItem.todo}
        <span className='todo-expired'>({expiredTime})</span>
      </div>
      <div 
        onClick={() => deleteTodo(todoItem)}
        className='delete-button'
      >
        Delete
      </div>
    </li>
  )
}