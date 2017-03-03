var React = require('react');
var styles = require('../styles')
var Header = require('../components/Header');
var AboutMe = require('../components/AboutMe');
var ButtonPanel = require('../components/ButtonPanel');

var HomeContainer = React.createClass({
	render: function (){
		return (
      <div>
        <Header />
        <AboutMe />
        <ButtonPanel />
      </div>
		)
	}
});

module.exports = HomeContainer;
