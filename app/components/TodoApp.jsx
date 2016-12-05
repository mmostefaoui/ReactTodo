var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            showCompleted:false,
            searchText:'',
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