var React = require('react');

var MediaQuery = require('react-responsive');

var Skills = React.createClass({
  render() {
    return (
      <div className="list-group">
        <a style={this.props.format.aboutMeBox} className="list-group-item">
          <h4 style={this.props.format.listHeading} className="list-group-item-heading">Technical Skills</h4>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">
            Javascript, Node.js, React.js, React-Native, Express.js, SQL/Sequelize, Postgres/PSQL,
            Angular.js, Promise.js, Github, HTML5, CSS3, D3.js, Jasmine, Mocha,
          </p>
        </a>
      </div>
    )
  }
})

module.exports = Skills;
