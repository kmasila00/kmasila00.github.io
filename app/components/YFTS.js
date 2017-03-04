var React = require('react');
var styles = require('../styles');

var YFTS = React.createClass({
  render(){
    return (
      <div style={styles.panelSize} className="list-group">
        <div style={styles.panelBox} className="list-group-item">
          <h4 style={styles.listHeading} className="list-group-item-heading">Your Favorite Team Sucks</h4>
          <p style={styles.eduNameStyle} className="list-group-item-text">August 2016 - September 2016</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● A Fantasy Football informational site
            (mobile compatible) that provides readers with up to date articles and rankings that will help them
            make the right decisions every week when it comes to their fantasy football team</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● All rankings and articles are
            stores on Postgres database and allow administrators to update the site every week with new
            information and post articles</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● Sequelize, Express, Angular, Node,
            HTML/CSS, Gulp</p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● Website -
            <a style={styles.eduTextStyle} target="_blank" href="http://yourfavoriteteamsucks.com" >
              https://yourfavoriteteamsucks.com
            </a>
          </p>
          <p style={styles.eduTextStyle} className="list-group-item-text">● GitHub Repo -
            <a style={styles.eduTextStyle} target="_blank" href="https://github.com/kmasila00/yourfavoriteteamsucks" >
              https://github.com/kmasila00/yourfavoriteteamsucks
            </a>
          </p>
          <img style={styles.imgSize} src={require('../images/yftsSS.png')}/>
        </div>
      </div>
    )
  }
});

module.exports = YFTS;