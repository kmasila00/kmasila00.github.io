var React = require('react');
var MediaQuery = require('react-responsive');
var styles = require('../stylesheets/Projects');

var Grok = React.createClass({
  render(){
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item">
              <h4 style={styles.MQ.listHeading} className="list-group-item-heading">Grok</h4>
              <p style={styles.MQ.eduNameStyle} className="list-group-item-text">July 2016</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Web application that will provide
                users ways to learn new material through internet resources and also share these with other users.
                Allows users to create learning plans and share these with others</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Chrome extension allows users to
                submit resources to the website as well as create plans while browsing the web. Uses Postgres database
                to store resource and information</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Set up the backend routing and databases
                in the intial steps. Moved to working extensively on the front-end. Worked with D3.js to implement landing
                page</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Sequelize, Express, Angular, Node,
                HTML/CSS, D3, Chrome Extension</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Website -
                <a style={styles.MQ.eduTextStyle} target="_blank" href="http://grokitall.com" >
                  https://grokitall.com
                </a>
              </p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.MQ.eduTextStyle} target="_blank" href="https://www.github.com/kmasila00/Grok" >
                  https://github.com/kmasila00/Grok
                </a>
              </p>
              <img style={styles.REG.imgSize} src={require('../images/grokSS.png')}/>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item">
              <h4 style={styles.REG.listHeading} className="list-group-item-heading">Grok</h4>
              <p style={styles.REG.eduNameStyle} className="list-group-item-text">July 2016</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Web application that will provide
                users ways to learn new material through internet resources and also share these with other users.
                Allows users to create learning plans and share these with others</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Chrome extension allows users to
                submit resources to the website as well as create plans while browsing the web. Uses Postgres database
                to store resource and information</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Set up the backend routing and databases
                in the intial steps. Moved to working extensively on the front-end. Worked with D3.js to implement landing
                page</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Sequelize, Express, Angular, Node,
                HTML/CSS, D3, Chrome Extension</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Website -
                <a style={styles.REG.eduTextStyle} target="_blank" href="http://grokitall.com" >
                  https://grokitall.com
                </a>
              </p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.REG.eduTextStyle} target="_blank" href="https://www.github.com/kmasila00/Grok" >
                  https://github.com/kmasila00/Grok
                </a>
              </p>
              <img style={styles.REG.imgSize} src={require('../images/grokSS.png')}/>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
});

module.exports = Grok;
