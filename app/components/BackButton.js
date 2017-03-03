var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var BackButton = React.createClass({
  render() {
    return (
      <div style={styles.buttonPanelStyle}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <Link to='/'>
              <button style={styles.buttonStyle.projects} type="button" className="btn btn-default">Back</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = BackButton;
