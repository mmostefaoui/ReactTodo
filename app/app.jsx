var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <h1>React Boilerplate</h1>,
    document.getElementById('app')
);
