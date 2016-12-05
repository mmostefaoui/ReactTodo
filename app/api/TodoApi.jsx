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
        } catch (ex) {
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos;

        filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted)

        // Filter by searchText
        if (searchText.length > 0) {
            filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().indexOf(searchText) > -1)
        }

        // sort
        filteredTodos.sort((a, b) => {
                if (!a.completed && b.completed) {
                    return -1;
                } else if (a.completed && !b.completed) {
                    return 1;
                } else {
                    return 0;
                }
            }
        );
        return filteredTodos;
    }
}
;