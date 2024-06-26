import { useState } from 'react'

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Exemplo 1",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Exemplo 2",
     category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Exemplo 3",
      category: "Estudos",
      isCompleted: false,
      
    }]);

    const addTodo = (text, category) => {

      const newTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }];

      setTodos(newTodos);
    };

    const removeTodo = (id) => {
      const newTodos = [...todos]
      const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
      setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
      const newTodos = [...todos]
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
      setTodos(newTodos);
    }

    return <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key= {todo.id}  todo={todo} removeTodo ={removeTodo} completeTodo={completeTodo} /> //passar dados dos components p/ app.jsx
        ))}
      </div>
      <TodoForm addTodo={addTodo} /> 
    </div>;
  }
  


export default App;
