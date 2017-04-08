var React = require('react');
var homeStyles = require('../stylesheets/Home');
var listStyles = require('../stylesheets/Lists');
var buttonStyles = require('../stylesheets/Buttons');
var Home = require('../components/Home');
var ButtonPanel = require('../components/ButtonPanel');
var MediaQuery = require('react-responsive');

var HomeContainer = React.createClass({
	render: function (){
		return (
			<div>
				<MediaQuery query='(max-device-width:450px)'>
					<Home
						format={homeStyles.MQ} />
				</MediaQuery>
				<MediaQuery query='(min-device-width:760px)'>
					<Home
						format={homeStyles.REG} />
				</MediaQuery>
			</div>
		)
	}
});

module.exports = HomeContainer;
