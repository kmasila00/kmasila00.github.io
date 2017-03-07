var React = require('react');
var styles = require('../styles');
var MediaQuery = require('react-responsive');

var AboutMe = React.createClass({
  render() {
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div className="list-group">
            <a style={styles.MQaboutMeBox} className="list-group-item">
              <h4 style={styles.MQlistHeading} className="list-group-item-heading">About Me</h4>
              <p style={styles.MQtextStyle} className="list-group-item-text">
                I first started coding as a sophomore in high school. I started with Visual Basic and Java eventually
                learning JavaScript in my free time. I attended The City College of New York as a Biology major and
                graduated with a degree in the science field. Even as a learned and made my way up the medical field,
                I made sure to make time for coding. It became more of a stress relief for me at that point.
              </p> <br/> <p style={styles.MQtextStyle} className="list-group-item-text">
              After graduating, I became an EMT and pursed that as a career. Of course I was never able to get rid of
              the habit of sitting in front of a screen coding and reading up on new technologies and frameworks. I soon
              realized that I was enjoying my hobby more than my actual career and the passion I had for coding became the
              prevalent part of my life. I decided to switch careers and pursue software engineering. I start learning on
              my own before attending a full-time bootcamp to further learn and enhance my knowledge.
            </p> <br/> <p style={styles.MQtextStyle} className="list-group-item-text">
            I have since worked on a few freelance projects while adding modern JavaScript technologies (React,
              Angular, Node, Express, Postgres) to my toolbelt. I currently work part time for a mobile start up company.
              I am most interested in front-end roles, but open to full-stack opportunities as well. If you think I
              would be a good fit for your team, please feel free to reach out!
            </p>
          </a>
        </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div className="list-group">
            <a style={styles.aboutMeBox} className="list-group-item">
              <h4 style={styles.listHeading} className="list-group-item-heading">About Me</h4>
              <p style={styles.textStyle} className="list-group-item-text">
                I first started coding as a sophomore in high school. I started with Visual Basic and Java eventually
                learning JavaScript in my free time. I attended The City College of New York as a Biology major and
                graduated with a degree in the science field. Even as a learned and made my way up the medical field,
                I made sure to make time for coding. It became more of a stress relief for me at that point.
              </p> <br/> <p style={styles.textStyle} className="list-group-item-text">
              After graduating, I became an EMT and pursed that as a career. Of course I was never able to get rid of
              the habit of sitting in front of a screen coding and reading up on new technologies and frameworks. I soon
              realized that I was enjoying my hobby more than my actual career and the passion I had for coding became the
              prevalent part of my life. I decided to switch careers and pursue software engineering. I start learning on
              my own before attending a full-time bootcamp to further learn and enhance my knowledge.
            </p> <br/> <p style={styles.textStyle} className="list-group-item-text">
            I have since worked on a few freelance projects while adding modern JavaScript technologies (React,
              Angular, Node, Express, Postgres) to my toolbelt. I currently work part time for a mobile start up company.
              I am most interested in front-end roles, but open to full-stack opportunities as well. If you think I
              would be a good fit for your team, please feel free to reach out!
            </p>
          </a>
        </div>
        </MediaQuery>
      </div>
    )
  }
})

module.exports = AboutMe;
