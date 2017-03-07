var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MediaQuery = require('react-responsive');

var ButtonPanel = React.createClass({
  render() {
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div style={styles.MQbuttonPanelStyle}>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
              <div className="btn-group" role="group">
                <Link to='/EducationExperience'>
                  <button style={styles.MQbuttonStyle.eduexp} type="button" className="btn btn-default">Education</button>
                </Link>
              </div>
              <div className="btn-group" role="group">
                <Link to='/Projects'>
                  <button style={styles.MQbuttonStyle.projects} type="button" className="btn btn-default">Projects</button>
                </Link>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
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
        </MediaQuery>
      </div>
    )
  }
})

module.exports = ButtonPanel;
