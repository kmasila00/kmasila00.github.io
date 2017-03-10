var React = require('react');
var styles = require('../stylesheets/Projects');
var MediaQuery = require('react-responsive');

var GOT = React.createClass({
  render(){
    return (
      <div>
        <MediaQuery query='(max-device-width:450px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item">
              <h4 style={styles.MQ.listHeading} className="list-group-item-heading">Welcome to the Game of Thrones</h4>
              <p style={styles.MQ.eduNameStyle} className="list-group-item-text">June 2016</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Sole Developer</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Trivia app that tests your knowledge
                of Game of Thrones at varying difficulty levels</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Used Postgres database to store and
                access scores and rankings against other players</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● Created using Sequelize, Express,
                Angular, Node, HTML/CSS</p>
              <p style={styles.MQ.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.MQ.eduTextStyle} target="_blank" href="https://github.com/kmasila00/Got-Trivia" >
                  https://github.com/kmasila00/Got-Trivia
                </a>
              </p>
              <img style={styles.REG.imgSize} src={require('../images/gotSS.png')}/>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width:760px)'>
          <div style={styles.REG.panelSize} className="list-group">
            <div style={styles.REG.panelBox} className="list-group-item">
              <h4 style={styles.REG.listHeading} className="list-group-item-heading">Welcome to the Game of Thrones</h4>
              <p style={styles.REG.eduNameStyle} className="list-group-item-text">June 2016</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Sole Developer</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Trivia app that tests your knowledge
                of Game of Thrones at varying difficulty levels</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Used Postgres database to store and
                access scores and rankings against other players</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● Created using Sequelize, Express,
                Angular, Node, HTML/CSS</p>
              <p style={styles.REG.eduTextStyle} className="list-group-item-text">● GitHub Repo -
                <a style={styles.REG.eduTextStyle} target="_blank" href="https://github.com/kmasila00/Got-Trivia" >
                  https://github.com/kmasila00/Got-Trivia
                </a>
              </p>
              <img style={styles.REG.imgSize} src={require('../images/gotSS.png')}/>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
});

module.exports = GOT;
