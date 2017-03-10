var React = require('react');
var MediaQuery = require('react-responsive');

var Education = React.createClass({
  render() {
    return (
      <div className="list-group">
        <a style={this.props.format.aboutMeBox} className="list-group-item">
          <h4 style={this.props.format.listHeading} className="list-group-item-heading">Education</h4>
          <p style={this.props.format.eduNameStyle} className="list-group-item-text">Fullstack Academy of Code</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">April 2016 - July 2016</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">13-week immersive software engineering course, specializing in Javascript</p>
          <br/>
          <p style={this.props.format.eduNameStyle} className="list-group-item-text">The City College of New York</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">August 2008 - May 2013</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">Bachelor's of Science in Biology</p>
        </a>
      </div>
    )
  }
})

module.exports = Education;
