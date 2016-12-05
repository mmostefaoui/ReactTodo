var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id:uuid(),
                    text: 'walk the dog'
                }, {
                    id:uuid(),
                    text: 'Celan the yard'
                }, {
                    id:uuid(),
                    text: 'Finish the todo app'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        console.log('new todo: ' + text);
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted, searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var {todos}=this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <TodoAdd onAddTodo={this.handleAddTodo}/>
            </div>);
    }
});

module.exports = TodoApp;