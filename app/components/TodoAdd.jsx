var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoAdd = React.createClass({

    onSubmit: function (evt) {
        evt.preventDefault();
        var {dispatch}=this.props;
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="What do ou need to do?"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

export  default connect()(TodoAdd);