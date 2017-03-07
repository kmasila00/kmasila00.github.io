var React = require('react');
var styles = require('../styles');
var MediaQuery = require('react-responsive');

var Pweb = React.createClass({
  render(){
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div style={styles.panelSize} className="list-group">
            <div style={styles.panelBox} className="list-group-item">
              <h4 style={styles.MQlistHeading} className="list-group-item-heading">Personal Website</h4>
              <p style={styles.MQeduNameStyle} className="list-group-item-text">February 2017</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">● Sole Developer</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">● A personal website built to give employers
                information about who I am and display my technical skills as well as my past and current projects</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">● Created using Node, HTML/CSS, React,
                React-Router and webpack</p>
              <p style={styles.MQeduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.MQeduTextStyle} target="_blank" href="https://github.com/kmasila00/kmasila00.github.io" >
                  https://github.com/kmasila00/kmasila00.github.io
                </a>
              </p>
              <img style={styles.imgSize} src={require('../images/pwebSS.png')}/>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div style={styles.panelSize} className="list-group">
            <div style={styles.panelBox} className="list-group-item">
              <h4 style={styles.listHeading} className="list-group-item-heading">Personal Website</h4>
              <p style={styles.eduNameStyle} className="list-group-item-text">February 2017</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">● Sole Developer</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">● A personal website built to give employers
                information about who I am and display my technical skills as well as my past and current projects</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">● Created using Node, HTML/CSS, React,
                React-Router and webpack</p>
              <p style={styles.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.eduTextStyle} target="_blank" href="https://github.com/kmasila00/kmasila00.github.io" >
                  https://github.com/kmasila00/kmasila00.github.io
                </a>
              </p>
              <img style={styles.imgSize} src={require('../images/pwebSS.png')}/>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
});

module.exports = Pweb;
