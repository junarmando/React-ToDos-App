import React, { Component } from 'react';
import _ from 'lodash';
import CreateTodo from './Create-todo';
import TodosList from './Todos-list';

const todos = [
  {
      task: 'kiss wife',
      isCompleted: false
  },
  {
      task: 'read email',
      isCompleted: true
  }
];

class App extends Component {

  constructor(props) {
      super();

      this.state = {
          todos
      };
  }

  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <h1>React ToDos App</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>        
        </div>
      </div>
    );
  }

  toggleTask(task) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todos: this.state.todos });
  }

  createTask(task) {
      this.state.todos.push({
          task,
          isCompleted: false
      });
      this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
      foundTodo.task = newTask;
      this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
      _.remove(this.state.todos, todo => todo.task === taskToDelete);
      this.setState({ todos: this.state.todos });
  }

}

export default App;
