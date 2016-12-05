var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        let stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (ex) {}

        return $.isArray(todos) ? todos : [];
    }
};