var React = require('react');
var BackButton = require('../components/BackButton');
var eduStyles = require('../stylesheets/Timeline');
var buttonStyles = require('../stylesheets/Buttons');
var MediaQuery = require('react-responsive');
var SVG = require('../components/Svg');
var TimelineBox = require('../components/TimelineBox');
var Markers = require('../components/Markers');
var Info = require('../Utils/info');
var BackButtonStyle = require('../stylesheets/BackButtonStyle');

var TimelineContainer = React.createClass({
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width:760px)'>
          <div className="row">
            <div id="leftBg" style={eduStyles.leftBg} ref="leftBg" className="col-lg-6 jumbotron">
              <TimelineBox
                id={Info.mobileStartup.id}
                imgName={Info.mobileStartup.image}
                company={Info.mobileStartup.company}
                title={Info.mobileStartup.title}
                time={Info.mobileStartup.time}
                details={Info.mobileStartup.details} />
              <TimelineBox
                id={Info.BJs.id}
                imgName={Info.BJs.image}
                company={Info.BJs.company}
                title={Info.BJs.title}
                time={Info.BJs.time}
                details={Info.BJs.details} />
              <TimelineBox
                id={Info.seniorcare.id}
                imgName={Info.seniorcare.image}
                company={Info.seniorcare.company}
                title={Info.seniorcare.title}
                time={Info.seniorcare.time}
                details={Info.seniorcare.details} />
            </div>
            <div style={eduStyles.rightBg} className="col-lg-6 jumbotron">
              <TimelineBox
                id={Info.fullstack.id}
                imgName={Info.fullstack.image}
                company={Info.fullstack.company}
                time={Info.fullstack.time}
                details={Info.fullstack.details} />
              <TimelineBox
                id={Info.EMT.id}
                imgName={Info.EMT.image}
                company={Info.EMT.company}
                time={Info.EMT.time}
                details={Info.EMT.details} />
              <TimelineBox
                id={Info.CCNY.id}
                imgName={Info.CCNY.image}
                company={Info.CCNY.company}
                time={Info.CCNY.time}
                details={Info.CCNY.details} />
            </div>
            <div style={eduStyles.overlay}>
              <SVG
                mobile="false" />
            </div>
            <div style={eduStyles.overlay2}>
              <BackButton
    						page={BackButtonStyle.backTimeline}/>
              <h1 style={eduStyles.title} ref='title'>THE TIMELINE</h1>
              <Markers
                markerStyle={eduStyles.markers} />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-device-width:450px)'>
          <div>
            <BackButton
              page={BackButtonStyle.backTimeline}/>
            <div style={eduStyles.MQbg} ref="leftBg" className="jumbotron">
              <h1 style={eduStyles.MQtitle} ref='title'>THE TIMELINE</h1>
              <TimelineBox
                mobile="true"
                id={Info.mobileStartup.id}
                imgName={Info.mobileStartup.image}
                company={Info.mobileStartup.company}
                title={Info.mobileStartup.title}
                time={Info.mobileStartup.time}
                details={Info.mobileStartup.details} />
              <div style={eduStyles.MQoverlay}>
              <SVG
                mobile="true" />
            </div>
              <div style={eduStyles.MQoverlay2}>
              <Markers
                markerStyle={eduStyles.MQmarkers} />
            </div>
              <TimelineBox
                mobile="true"
                id={Info.fullstack.id}
                imgName={Info.fullstack.image}
                company={Info.fullstack.company}
                time={Info.fullstack.time}
                details={Info.fullstack.details} />
              <TimelineBox
                mobile="true"
                id={Info.BJs.id}
                imgName={Info.BJs.image}
                company={Info.BJs.company}
                title={Info.BJs.title}
                time={Info.BJs.time}
                details={Info.BJs.details} />
              <TimelineBox
                mobile="true"
                id={Info.seniorcare.id}
                imgName={Info.seniorcare.image}
                company={Info.seniorcare.company}
                title={Info.seniorcare.title}
                time={Info.seniorcare.time}
                details={Info.seniorcare.details} />
              <TimelineBox
                mobile="true"
                id={Info.EMT.id}
                imgName={Info.EMT.image}
                company={Info.EMT.company}
                time={Info.EMT.time}
                details={Info.EMT.details} />
              <TimelineBox
                mobile="true"
                id={Info.CCNY.id}
                imgName={Info.CCNY.image}
                company={Info.CCNY.company}
                time={Info.CCNY.time}
                details={Info.CCNY.details} />
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
});

module.exports = TimelineContainer;
