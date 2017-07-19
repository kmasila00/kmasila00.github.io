var React = require('react');

var SVG = React.createClass({
  render() {
    if(this.props.mobile === "true"){
      var styles = {
        strokeWidth: 10,
        stroke: 'black',
      };
      return (
        <svg height='4400' width='150'>
          <line x1='75' y1='75' x2='75' y2='4400' style={styles} />
        </svg>
      )
    } else {
      var styles = {
        strokeWidth: 5,
        stroke: 'black'
      };
      return (
        <svg height='2600' width='20'>
          <line x1='10' y1='215' x2='10' y2='2600' style={styles} />
        </svg>
      )
    }
  }
})

module.exports = SVG;
