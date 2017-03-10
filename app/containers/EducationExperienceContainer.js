var React = require('react');
var Education = require('../components/Education');
var Experience = require('../components/Experience');
var Skills = require('../components/Skills');
var BackButton = require('../components/BackButton');
var eduStyles = require('../stylesheets/EducationBox');
var buttonStyles = require('../stylesheets/Buttons');
var MediaQuery = require('react-responsive');

var EducationExperienceContainer = React.createClass({
  render(){
    return (
      <div style={eduStyles.REG.EEpageStyle}>
				<MediaQuery query='(max-device-width:450px)'>
          <Education
            format={eduStyles.MQ} />
          <Skills
            format={eduStyles.MQ} />
          <Experience
            format={eduStyles.MQ} />
          <BackButton
            format={buttonStyles.MQ} />
				</MediaQuery>
				<MediaQuery query='(min-device-width:760px)'>
          <Education
            format={eduStyles.REG} />
          <Skills
            format={eduStyles.REG} />
          <Experience
            format={eduStyles.REG} />
          <BackButton
            format={buttonStyles.REG} />
				</MediaQuery>
			</div>
    )
  }
});

module.exports = EducationExperienceContainer;
