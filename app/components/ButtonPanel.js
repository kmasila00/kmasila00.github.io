var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MediaQuery = require('react-responsive');

var ButtonPanel = React.createClass({
  render() {
    return (
      <div style={this.props.format.buttonPanelStyle}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <Link to='/EducationExperience'>
              <button style={this.props.format.buttonStyle} type="button" className="btn btn-default">Education/Experience</button>
            </Link>
          </div>
          <div className="btn-group" role="group">
            <Link to='/Projects'>
              <button style={this.props.format.buttonStyle} type="button" className="btn btn-default">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ButtonPanel;
