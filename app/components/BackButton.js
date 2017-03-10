var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MediaQuery = require('react-responsive');

var BackButton = React.createClass({
  render() {
    return (
      <div style={this.props.format.buttonPanelStyle}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <Link to='/'>
              <button style={this.props.format.buttonStyle} type="button" className="btn btn-default">Back</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = BackButton;
