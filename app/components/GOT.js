var React = require('react');
var styles = require('../styles');

var GOT = React.createClass({
  render(){
    return (
      <div style={styles.panelSize} className="list-group">
        <div style={styles.panelBox} className="list-group-item">
          <h4 style={styles.listHeading} className="list-group-item-heading">Welcome to the Game of Thrones</h4>
          <p style={styles.eduNameStyle} className="list-group-item-text">June 2016</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● Trivia app that tests your knowledge
            of Game of Thrones at varying difficulty levels</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● Used Postgres database to store and
            access scores and rankings against other players</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● Created using Sequelize, Express,
            Angular, Node, HTML/CSS</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● GitHub Repo -
            <a style={styles.eduTextStyle} target="_blank" href="https://github.com/kmasila00/Got-Trivia" >
              https://github.com/kmasila00/Got-Trivia
            </a>
          </p>
          <img style={styles.imgSize} src={require('../images/gotSS.png')}/>
        </div>
      </div>
    )
  }
});

module.exports = GOT;
