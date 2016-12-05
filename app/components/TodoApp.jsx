var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                }, {
                    id: 2,
                    text: 'Celan the yard'
                }, {
                    id: 3,
                    text: 'Finish the todo app'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        console.log('new todo: ' + text);
    },
    render: function () {
        var {todos}=this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <TodoAdd onAddTodo={this.handleAddTodo}/>
            </div>);
    }
});

module.exports = TodoApp;