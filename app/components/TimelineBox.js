var React = require('react');
var WholeStyles = require('../stylesheets/TimelineBox');
var Styles = WholeStyles.timelineBoxStyles;
var MQStyles = WholeStyles.MQtimelineBoxStyles;
var MediaQuery = require('react-responsive');


var timelineBox = React.createClass({
  render() {
    if(this.props.mobile === "true"){
      var imgName = this.props.imgName
      var detailItems = this.props.details.map(function(elem){
        return (
          <li key={elem}>
            <h3 style={MQStyles.bullets}>{elem}</h3>
          </li>
        );
      });

      var containerStyle = {
        marginTop:0,
        marginLeft: 150
      }
      var id = this.props.id;
      if(id === 1) containerStyle.marginTop = 100;
      else if(id === 2) containerStyle.marginTop = 1055;
      else if(id === 3) containerStyle.marginTop = 1835;
      else if(id === 4) containerStyle.marginTop = 2350;
      else if(id === 5) containerStyle.marginTop = 3085;
      else if(id === 6) containerStyle.marginTop = 3585;
      else containerStyle.marginTop = 4085;

      return (
        <div style={containerStyle}>
          <img style={MQStyles.logo} src={require('../images/' + imgName)}/>
          <span style={MQStyles.desc}>
            <h1 style={MQStyles.header}>{this.props.company}</h1>
            <h2 style={MQStyles.subHeader}>{this.props.title}</h2>
            <h2 style={MQStyles.subHeader}>{this.props.time}</h2>
            <ul>
              {detailItems}
            </ul>
          </span>
        </div>
      )
    } else {
      var imgName = this.props.imgName
      var detailItems = this.props.details.map(function(elem){
        return (
          <li key={elem}>
            <h6>{elem}</h6>
          </li>
        );
      });

      var containerStyle = {
        marginTop:0
      }
      var id = this.props.id;
      if(id === 1) containerStyle.marginTop = 150;
      else if(id === 2) containerStyle.marginTop = 490;
      else if(id === 3) containerStyle.marginTop = 840;
      else if(id === 4) containerStyle.marginTop = 1185;
      else if(id === 5) containerStyle.marginTop = 1510;
      else if(id === 6) containerStyle.marginTop = 1860;
      else containerStyle.marginTop = 2235;

      return (
        <div className="scr" style={containerStyle}>
          <img style={Styles.logo} src={require('../images/' + imgName)}/>
          <span style={Styles.desc}>
            <h4 style={Styles.header}>{this.props.company}</h4>
            <h5 style={Styles.subHeader}>{this.props.title}</h5>
            <h5 style={Styles.subHeader}>{this.props.time}</h5>
            <ul>
              {detailItems}
            </ul>
          </span>
        </div>
      )
    }
  }
})

module.exports = timelineBox;
