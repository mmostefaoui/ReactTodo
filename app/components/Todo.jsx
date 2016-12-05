var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div onClick={() => this.props.onToggle(id)}
                 className={todoClassName}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="tot__subtext">{renderDate()}</p>
                </div>

            </div>
        );
    }
});

module.exports = Todo;