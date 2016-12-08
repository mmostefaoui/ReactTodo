var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoAdd} = require('TodoAdd');

describe('TodoAdd', () => {
    it('should exist', () => {
        expect(TodoAdd).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        let todoText = 'Check mail';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };

        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));

        todoAdd.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let todoText = '';
        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));

        todoAdd.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText);
    });
});