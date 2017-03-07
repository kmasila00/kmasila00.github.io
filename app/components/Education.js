var React = require('react');
var styles = require('../styles');
var MediaQuery = require('react-responsive');

var Education = React.createClass({
  render() {
    return (
      <div>
        <MediaQuery query='(max-device-width: 450px)'>
          <div className="list-group">
            <a style={styles.MQaboutMeBox} className="list-group-item">
              <h4 style={styles.MQlistHeading} className="list-group-item-heading">Education</h4>
              <p style={styles.MQeduNameStyle} className="list-group-item-text">Fullstack Academy of Code</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">April 2016 - July 2016</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">13-week immersive software engineering course, specializing in Javascript</p>
              <br/>
              <p style={styles.MQeduNameStyle} className="list-group-item-text">The City College of New York</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">August 2008 - May 2013</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">Bachelor's of Science in Biology</p>
            </a>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div className="list-group">
            <a style={styles.aboutMeBox} className="list-group-item">
              <h4 style={styles.listHeading} className="list-group-item-heading">Education</h4>
              <p style={styles.eduNameStyle} className="list-group-item-text">Fullstack Academy of Code</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">April 2016 - July 2016</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">13-week immersive software engineering course, specializing in Javascript</p>
              <br/>
              <p style={styles.eduNameStyle} className="list-group-item-text">The City College of New York</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">August 2008 - May 2013</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">Bachelor's of Science in Biology</p>
            </a>
          </div>
        </MediaQuery>
      </div>
    )
  }
})

module.exports = Education;
