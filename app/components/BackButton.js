var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MediaQuery = require('react-responsive');
var BackButtonStyle = require('../stylesheets/BackButtonStyle')

var BackButton = React.createClass({
  render() {
    return (
      <div style={this.props.page.topLeft}>
        <Link to='/'>
          <span style={this.props.page.buttonColor} className="glyphicon glyphicon-chevron-left"></span>
        </Link>
      </div>
    )
  }
})

module.exports = BackButton;
