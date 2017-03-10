var React = require('react');


var ProjectButtons = React.createClass({
  render() {
    return (
      <div style={styles.projectButtonPanel}>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
              <button style={styles.buttonStyle.eduexp} type="button" className="btn btn-default">Grok</button>
          </div>
          <div className="btn-group" role="group">
              <button style={styles.buttonStyle.projects} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
          </div>
          <div className="btn-group" role="group">
              <button style={styles.buttonStyle.projects} type="button" className="btn btn-default">GoT Trivia</button>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ProjectButtons;
