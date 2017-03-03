var React = require('react');
var styles = require('../styles');

var AboutMe = React.createClass({
  render() {
    return (
      <div className="list-group">
        <a style={styles.aboutMeBox} className="list-group-item">
          <h4 style={styles.listHeading} className="list-group-item-heading">About Me</h4>
          <p style={styles.textStyle} className="list-group-item-text">
            Hi, I’m Kelvin! I’m a sports-loving full-stack software engineer seeking full-time opportunities.
            I am a former EMT and have been coding since I was a teenager. My humble beginnings started with
            Visual Basic and Java, but I have since added modern JavaScript technologies (React, Angular, Node,
            Express, Postgres) to my toolbelt. I am most interested in front-end roles, but open to full-stack
            opportunities as well. If you think I would be a good fit for your team, please feel free to reach out!
          </p>
        </a>
      </div>
    )
  }
})

module.exports = AboutMe;
