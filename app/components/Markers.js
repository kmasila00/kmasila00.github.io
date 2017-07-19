var React = require('react');

var Markers = React.createClass({
  render(){
    return (
      <div>
        <div><span style={this.props.markerStyle.marker1} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker2} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker3} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker4} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker5} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker6} className="glyphicon glyphicon-record"></span></div>
        <div><span style={this.props.markerStyle.marker7} className="glyphicon glyphicon-record"></span></div>
      </div>
    )
  }
})

module.exports = Markers;
