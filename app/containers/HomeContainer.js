var React = require('react');
var headerStyles = require('../stylesheets/Header');
var listStyles = require('../stylesheets/Lists');
var buttonStyles = require('../stylesheets/Buttons');
var Header = require('../components/Header');
var AboutMe = require('../components/AboutMe');
var ButtonPanel = require('../components/ButtonPanel');
var MediaQuery = require('react-responsive');

var HomeContainer = React.createClass({
	render: function (){
		return (
			<div>
				<MediaQuery query='(max-device-width:450px)'>
					<Header
						format={headerStyles.MQ} />
	        <AboutMe
						format={listStyles.MQ} />
	        <ButtonPanel
						format={buttonStyles.MQ} />
				</MediaQuery>
				<MediaQuery query='(min-device-width:760px)'>
					<Header
						format={headerStyles.REG} />
					<AboutMe
						format={listStyles.REG} />
					<ButtonPanel
						format={buttonStyles.REG} />
				</MediaQuery>
			</div>
		)
	}
});

module.exports = HomeContainer;
