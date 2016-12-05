var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd', () => {
    it('should exist', () => {
        expect(TodoAdd).toExist();
    });

    it('should call onAddTodo with valid data', () => {
        let todoText = 'Check mail';
        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));

        todoAdd.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo with invalid data', () => {
        let todoText = '';
        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));

        todoAdd.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText);
    });
});