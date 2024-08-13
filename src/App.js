import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoTabs from './components/TodoTabs';
import ToDoList from './components/ToDoList';
import ActivityGen from './components/ActivityGen';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const filterTodos = () => {
    if (activeTab === 'active') {
      return todos.filter(todo => !todo.completed);
    } else if (activeTab === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  return (
    <section className="vh-100 gradient-custom">
          
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h1 className="text-uppercase text-center mb-5">Todo List</h1>
                <TodoForm addTodo={addTodo} />
                <TodoTabs setActiveTab={setActiveTab} />
                <ToDoList todos={filterTodos()} toggleCompletion={toggleCompletion} />
                <ActivityGen addActivity={addTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
