var React = require('react');
var styles = require('../styles');
var Grok = require('../components/Grok');
var YFTS = require('../components/YFTS');
var GOT = require('../components/GOT');

var PanelContainer = React.createClass({
  render(){
    if(this.props.panel === 'Grok'){
      return (
        <Grok />
      )
    } else if(this.props.panel === 'YFTS'){
      return (
        <YFTS />
      )
    } else if(this.props.panel === 'GOT'){
      return (
        <GOT />
      )
    }
  }
});

module.exports = PanelContainer;
