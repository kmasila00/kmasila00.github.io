var React = require('react');
var Profile = require('../components/Profile');
var MediaQuery = require('react-responsive');
var ProfileStyle = require('../stylesheets/Profile');
var BackButton = require('../components/BackButton');
var BackButtonStyle = require('../stylesheets/BackButtonStyle');

var ProfileContainer = React.createClass({
	render: function (){
		return (
			<div>
				<MediaQuery query='(max-device-width:450px)'>
					<BackButton
						page={BackButtonStyle.backProfile}/>
          <Profile
            format={ProfileStyle.MQProfileStyles}/>
				</MediaQuery>
				<MediaQuery query='(min-device-width:760px)'>
					<BackButton
						page={BackButtonStyle.backProfile}/>
          <Profile
            format={ProfileStyle.ProfileStyles}/>
				</MediaQuery>
			</div>
		)
	}
});

module.exports = ProfileContainer;
