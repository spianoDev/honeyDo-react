import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import TodoList from '../TodoList/TodoList';
import NewTodo from '../NewTodo/NewTodo';

export default class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
                <nav>
                    <a href="https://spiano.dev"> Home </a>
                    <Link to="/"> Lists </Link>
                    <Link to="/todo/new"> New HoneyDo </Link>
                </nav>
            </header>
              <main>
                  <h1>
                      Welcome to HoneyDo.
                  </h1>
                  <div>
                      <Switch>
                          <Route path="/" exact={true} component={TodoList} />
                          {/*<Route path="/todo/new" exact={true} component={NewTodo} />*/}
                      </Switch>
                  </div>
              </main>
          </div>
    )
  }
}

