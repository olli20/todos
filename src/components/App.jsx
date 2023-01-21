import { Component } from 'react';

import TodoList from './TodoList';

import initialTodos from '../data/todos.json';

import './App.module.scss';

class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }
  render() {
    const { todos } = this.state;
    // const completedTodos = todos.filter(todo => todo.completed === true).length;
    const todoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 
      0,
    );

    return (
      <div className="App">
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}  />
        <div>
          <h2>Statistics</h2>
          <p>Total quantity: {todoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>
      </div>
    );
  };
  }

export default App;
