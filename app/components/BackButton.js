var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MediaQuery = require('react-responsive');

var BackButton = React.createClass({
  render() {
    return (
      <div style={styles.buttonPanelStyle}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
              <MediaQuery query='(max-device-width:450px)'>
                <Link to='/'>
                  <button style={styles.MQbuttonStyle.projects} type="button" className="btn btn-default">Back</button>
                </Link>
              </MediaQuery>
              <MediaQuery query='(min-device-width:760px)'>
                <Link to='/'>
                  <button style={styles.buttonStyle.projects} type="button" className="btn btn-default">Back</button>
                </Link>
              </MediaQuery>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = BackButton;
