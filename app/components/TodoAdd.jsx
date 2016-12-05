var React = require('react');

var TodoAdd = React.createClass({

    onSubmit: function (evt) {
        evt.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }else {
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

module.exports = TodoAdd;