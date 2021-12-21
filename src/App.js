import React, { useState, useCallback } from 'react';
import Form from './components/Form';
import TodoContainer from './components/TodoContainer';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ todo: "", expired: 0 });
  const [todos, setTodos] = useState([]);
  console.log("App");

  const handleChageInput = useCallback((e) => {
    console.log("--func handleChageInput");
    const { name, value } = e.target;
    setTodo(prev => {
      return { ...prev, [name]: value };
    })
  }, []);

  const submitTodo = useCallback((e) => {
    console.log("--func submitTodo");
    e.preventDefault();
    if(todo.todo && todo.expired) {
      const todoWithId = { ...todo, id: Math.random() };

      setTodos(prev => {
        return [...prev, todoWithId];
      });
      setTodo({ todo: "", expired: 0 });
    }
  }, [todo]);

  const deleteTodo = useCallback((todoItem) => {
    console.log("--func deleteTodo");
    setTodos(prev => prev.filter((todo) => todo.id !== todoItem.id))
  }, []);

  return (
    <div className='container'>
      <h1>TODOLIST FOR PERFORMANCE OPTIMIZATION</h1>
      <Form 
        submitTodo={submitTodo}
        handleChageInput={handleChageInput}
        todo={todo}
      />
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
