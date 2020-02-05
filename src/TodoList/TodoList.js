import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            listOfTodos: []
        };
    }
    componentDidMount() {
        axios.get('https://honeydo-app.herokuapp.com/api/')
            .then(res => {
                console.log(res.data);
                this.setState({ listOfTodos: res.data})
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
         let todo = this.state.listOfTodos.map(todo => {
             return (
             <div key={todo.title}>
                 <ul>
                     <Link to={`https://honeydo-app.herokuapp.com/api/${todo.title}`}>{todo.title}</Link>
                 </ul>

             </div>
         );
         });
        console.log(this.state);
        return <div>
            <h2> HoneyDo Lists </h2>
            {todo}
        </div>
    }
}
