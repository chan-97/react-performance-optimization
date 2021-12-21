import React from 'react';
import './Form.css';

export default React.memo(function Form({ submitTodo, handleChageInput, todo }) {
  console.log("Form");
  return (
    <form className='todo-form' onSubmit={submitTodo}>
      <div className='inputs-box'>
        <input
          name='todo'
          onChange={handleChageInput}
          value={todo.todo}
          className='input'
          type='text'
          placeholder='todo'
        />
        <input
          name='expired'
          onChange={handleChageInput}
          value={todo.expired}
          className='input'
          type='number'
          min="0"
          max="120"
          maxLength="3"
          placeholder='expired (시간단위)'
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
})