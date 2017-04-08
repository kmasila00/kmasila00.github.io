var React = require('react');
var styles = require('../stylesheets/Projects');
var MediaQuery = require('react-responsive');

var Pweb = React.createClass({
  render(){
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item">
              <h4 style={styles.MQ.listHeading} className="list-group-item-heading">Personal Website</h4>
              <p style={styles.MQ.eduNameStyle} className="list-group-item-text">February 2017</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Sole Developer</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● A personal website built to give employers
                information about who I am and display my technical skills as well as my past and current projects</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Created using Node, HTML/CSS, React,
                React-Router and webpack</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.MQ.eduTextStyle} target="_blank" href="https://github.com/kmasila00/kmasila00.github.io" >
                  https://github.com/kmasila00/kmasila00.github.io
                </a>
              </p>
              <img className="pwebBorder" style={styles.MQ.imgSize} src={require('../images/pwebSS.png')}/>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item column row">
              <div className="col-lg-6">
                <img className="pwebBorder" style={styles.REG.imgSize} src={require('../images/pwebSS.png')}/>
              </div>
              <div className="col-lg-6">
                <h4 style={styles.REG.listHeading} className="list-group-item-heading">Personal Website</h4>
                <p style={styles.REG.eduNameStyle} className="list-group-item-text">February 2017</p>
                <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Sole Developer</p>
                <p style={styles.REG.eduTextStyle} className="list-group-item-text">● A personal website built to give employers
                  information about who I am and display my technical skills as well as my past and current projects</p>
                <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Created using Node, HTML/CSS, React,
                  React-Router and webpack</p>
                <p style={styles.REG.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                  <a style={styles.REG.eduTextStyle} target="_blank" href="https://github.com/kmasila00/kmasila00.github.io" >
                    https://github.com/kmasila00/kmasila00.github.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
});

module.exports = Pweb;
