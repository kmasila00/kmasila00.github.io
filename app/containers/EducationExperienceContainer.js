var React = require('react');
var styles = require('../styles');
var Education = require('../components/Education');
var Experience = require('../components/Experience');
var Skills = require('../components/Skills');
var BackButton = require('../components/BackButton');

var EducationExperienceContainer = React.createClass({
  render(){
    return (
      <div style={styles.EEpageStyle}>
        <Education />
        <Skills />
        <Experience />
        <BackButton />
      </div>
    )
  }
});

module.exports = EducationExperienceContainer;
