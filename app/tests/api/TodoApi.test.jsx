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
});