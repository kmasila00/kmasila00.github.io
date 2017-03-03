var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ButtonPanel = React.createClass({
  render() {
    return (
      <div style={styles.buttonPanelStyle}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <Link to='/EducationExperience'>
              <button style={styles.buttonStyle.eduexp} type="button" className="btn btn-default">Education/Experience</button>
            </Link>
          </div>
          <div className="btn-group" role="group">
            <Link to='/Projects'>
              <button style={styles.buttonStyle.projects} type="button" className="btn btn-default">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ButtonPanel;
