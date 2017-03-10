var React = require('react');
var BackButton = require('../components/BackButton');
var ProjectButtons = require('../components/ProjectButtons');
var Grok = require('../components/Grok');
var YFTS = require('../components/YFTS');
var GOT = require('../components/GOT');
var Pweb = require('../components/Pweb');
var MediaQuery = require('react-responsive');
var projectStyles = require('../stylesheets/Projects');
var buttonStyles = require('../stylesheets/Buttons');

var ProjectsContainer = React.createClass({
	getInitialState: function(){
		return {
			panel: 'Grok'
		}
	},
	grokPanel: function(){
		this.setState({
			panel: 'Grok'
		})
	},
	yftsPanel: function(){
		this.setState({
			panel: 'YFTS'
		})
	},
	gotPanel: function(){
		this.setState({
			panel: 'GOT'
		})
	},
	pwebPanel: function(){
		this.setState({
			panel: 'Pweb'
		})
	},
  render(){
		if(this.state.panel === 'Grok'){
			return (
				<div>
					<MediaQuery query='(max-device-width:450px)'>
						<div className="list-group">
							<a style={projectStyles.MQ.aboutMeBox} className="list-group-item">
								<h2 style={projectStyles.MQ.projectHeading} className="list-group-item-heading">Projects</h2>
							</a>
						</div>
					</MediaQuery>
					<MediaQuery query='(min-device-width:760px)'>
						<div className="list-group">
							<a style={projectStyles.REG.aboutMeBox} className="list-group-item">
								<h2 style={projectStyles.REG.projectHeading} className="list-group-item-heading">Projects</h2>
							</a>
						</div>
					</MediaQuery>
					<div style={projectStyles.REG.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<Grok />
					<div style={projectStyles.REG.EEpageStyle}>
						<MediaQuery query='(max-device-width:450px)'>
							<BackButton
								format={buttonStyles.MQ} />
						</MediaQuery>
						<MediaQuery query='(min-device-width:760px)'>
							<BackButton
								format={buttonStyles.REG} />
						</MediaQuery>
					</div>
				</div>
			)
		} else if(this.state.panel === 'YFTS'){
			return (
				<div>
					<div className="list-group">
						<a style={projectStyles.REG.aboutMeBox} className="list-group-item">
							<h2 style={projectStyles.REG.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={projectStyles.REG.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<YFTS />
					<div style={projectStyles.REG.EEpageStyle}>
						<MediaQuery query='(max-device-width:450px)'>
							<BackButton
								format={buttonStyles.MQ} />
						</MediaQuery>
						<MediaQuery query='(min-device-width:760px)'>
							<BackButton
								format={buttonStyles.REG} />
						</MediaQuery>
					</div>
				</div>
			)
		} else if(this.state.panel === 'GOT'){
			return (
				<div>
					<div className="list-group">
						<a style={projectStyles.REG.aboutMeBox} className="list-group-item">
							<h2 style={projectStyles.REG.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={projectStyles.REG.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<GOT />
					<div style={projectStyles.REG.EEpageStyle}>
						<MediaQuery query='(max-device-width:450px)'>
							<BackButton
								format={buttonStyles.MQ} />
						</MediaQuery>
						<MediaQuery query='(min-device-width:760px)'>
							<BackButton
								format={buttonStyles.REG} />
						</MediaQuery>
					</div>
				</div>
			)
		} else if(this.state.panel === 'Pweb'){
			return (
				<div>
					<div className="list-group">
						<a style={projectStyles.REG.aboutMeBox} className="list-group-item">
							<h2 style={projectStyles.REG.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={projectStyles.REG.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={projectStyles.REG.buttonStyle} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<Pweb />
					<div style={projectStyles.REG.EEpageStyle}>
						<MediaQuery query='(max-device-width:450px)'>
							<BackButton
								format={buttonStyles.MQ} />
						</MediaQuery>
						<MediaQuery query='(min-device-width:760px)'>
							<BackButton
								format={buttonStyles.REG} />
						</MediaQuery>
					</div>
				</div>
			)
		}
  }
});

module.exports = ProjectsContainer;
