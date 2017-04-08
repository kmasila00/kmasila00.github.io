var React = require('react');
var BackButton = require('../components/BackButton');
var ProjectButtons = require('../components/ProjectButtons');
var Grok = require('../components/Grok');
var YFTS = require('../components/YFTS');
var GOT = require('../components/GOT');
var Pweb = require('../components/Pweb');
var MediaQuery = require('react-responsive');
var projectStyles = require('../stylesheets/Projects');
var BackButtonStyle = require('../stylesheets/BackButtonStyle');

var ProjectsContainer = React.createClass({
  render(){
			return (
				<div style={projectStyles.REG.bg}>
					<MediaQuery query='(max-device-width:450px)'>
            <BackButton
  						page={BackButtonStyle.backProject}/>
						<div style={projectStyles.REG.topAdjust} className="list-group">
							<h1 style={projectStyles.MQ.projectHeading} className="list-group-item-heading">PROJECTS</h1>
						</div>
					</MediaQuery>
					<MediaQuery query='(min-device-width:760px)'>
            <BackButton
  						page={BackButtonStyle.backProject}/>
						<div style={projectStyles.REG.topAdjust} className="list-group">
							<h1 style={projectStyles.REG.projectHeading} className="list-group-item-heading">PROJECTS</h1>
						</div>
					</MediaQuery>
					<Grok />
					<YFTS />
					<GOT />
					<Pweb />
				</div>
			)
  }
});

module.exports = ProjectsContainer;
