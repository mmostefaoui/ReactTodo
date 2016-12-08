var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        let searchText = 'Dog';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: searchText
        };
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checbox checked', () => {
        let showCompleted = true;
        var action ={
            type:'TOGGLE_SHOW_COMPLETED'
        };
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});