var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate: function () {
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted, searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        let {todos, showCompleted, searchText}=this.state;
        let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <TodoAdd onAddTodo={this.handleAddTodo}/>
            </div>);
    }
});

module.exports = TodoApp;