var React = require('react');

var SVG = React.createClass({
  render() {
    if(this.props.mobile === "true"){
      var styles = {
        strokeWidth: 10,
        stroke: 'black',
      };
      return (
        <svg height='3500' width='150'>
          <line x1='75' y1='75' x2='75' y2='3340' style={styles} />
        </svg>
      )
    } else {
      var styles = {
        strokeWidth: 5,
        stroke: 'black'
      };
      return (
        <svg height='2000' width='20'>
          <line x1='10' y1='215' x2='10' y2='1940' style={styles} />
        </svg>
      )
    }
  }
})

module.exports = SVG;
