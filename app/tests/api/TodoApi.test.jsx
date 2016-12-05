var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 10,
                text: "DO something",
                completed: false
            }];

            TodoApi.setTodos(todos);
            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let badData = {a: 'b'};

            TodoApi.setTodos(badData);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });


    describe('getTodos', () => {
        it('should return empty array for bad data', () => {
            let actualData = TodoApi.getTodos();
            expect(actualData).toEqual([]);
        });

        it('should return todo if valid array in localstorage', () => {
            let todos = [{
                id: 10,
                text: "DO something",
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));
            let actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        let todos = [
            {id: 1, text: "DO something", completed: true},
            {id: 2, text: "DO something new", completed: false},
            {id: 3, text: "DO something else", completed: true}
        ];

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only items not have been completed if showCompleted is false', () => {
            let filteredTodos = TodoApi.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, 'else');

            expect(filteredTodos.length).toBe(1);
        });

        it('should return all items if searchTest is empty', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
    });
});