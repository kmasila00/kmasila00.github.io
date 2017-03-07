var React = require('react');
var styles = require('../styles');
var BackButton = require('../components/BackButton');
var ProjectButtons = require('../components/ProjectButtons');
var Grok = require('../components/Grok');
var YFTS = require('../components/YFTS');
var GOT = require('../components/GOT');
var Pweb = require('../components/Pweb');
var MediaQuery = require('react-responsive');

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
							<a style={styles.MQaboutMeBox} className="list-group-item">
								<h2 style={styles.MQprojectHeading} className="list-group-item-heading">Projects</h2>
							</a>
						</div>
					</MediaQuery>
					<MediaQuery query='(min-device-width:760px)'>
						<div className="list-group">
							<a style={styles.aboutMeBox} className="list-group-item">
								<h2 style={styles.projectHeading} className="list-group-item-heading">Projects</h2>
							</a>
						</div>
					</MediaQuery>
					<div style={styles.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<Grok />
					<div style={styles.EEpageStyle}>
						<BackButton />
					</div>
				</div>
			)
		} else if(this.state.panel === 'YFTS'){
			return (
				<div>
					<div className="list-group">
						<a style={styles.aboutMeBox} className="list-group-item">
							<h2 style={styles.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={styles.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.eduexp} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<YFTS />
					<div style={styles.EEpageStyle}>
						<BackButton />
					</div>
				</div>
			)
		} else if(this.state.panel === 'GOT'){
			return (
				<div>
					<div className="list-group">
						<a style={styles.aboutMeBox} className="list-group-item">
							<h2 style={styles.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={styles.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.eduexp} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<GOT />
					<div style={styles.EEpageStyle}>
						<BackButton />
					</div>
				</div>
			)
		} else if(this.state.panel === 'Pweb'){
			return (
				<div>
					<div className="list-group">
						<a style={styles.aboutMeBox} className="list-group-item">
							<h2 style={styles.projectHeading} className="list-group-item-heading">Projects</h2>
						</a>
					</div>
					<div style={styles.projectButtonPanel}>
						<div className="btn-group btn-group-justified" role="group" aria-label="...">
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.eduexp} onClick={this.grokPanel} type="button" className="btn btn-default">Grok</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.yftsPanel} type="button" className="btn btn-default">Your Favorite Team Sucks</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.gotPanel} type="button" className="btn btn-default">GoT Trivia</button>
							</div>
							<div className="btn-group" role="group">
								<button style={styles.buttonStyle.projects} onClick={this.pwebPanel} type="button" className="btn btn-default">Personal Website</button>
							</div>
						</div>
					</div>
					<Pweb />
					<div style={styles.EEpageStyle}>
						<BackButton />
					</div>
				</div>
			)
		}
  }
});

module.exports = ProjectsContainer;