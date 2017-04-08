var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var css = require('./stylesheets/styles.css');

ReactDOM.render(
	routes,
	document.getElementById('app')
);
