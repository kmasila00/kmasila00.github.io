var React = require('react');
var MediaQuery = require('react-responsive');

var Experience = React.createClass({
  render() {
    return (
      <div className="list-group">
        <a style={this.props.format.aboutMeBox} className="list-group-item">
          <h4 style={this.props.format.listHeading} className="list-group-item-heading">Experience</h4>
          <p style={this.props.format.eduNameStyle} className="list-group-item-text">Contract Software Engineer</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">Mobile Startup Company</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">January 2017 - Present</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">● Currently working on a React Native
            Project with a team of 9 engineers</p>
          <br/>
          <p style={this.props.format.eduNameStyle} className="list-group-item-text">Pharmacy Technician</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">BJ's Pharmacy</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">June 2010 - August 2015</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">● Swiftly and correctly calculate dosages,
            dispense medication, prepare prescription labels and fill prescriptions for approval by pharmacist</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">● Use the pharmacy’s proprietary computer
            program to access prescription information including patient and prescriber data, drug selection,
            prescription interpretation and insurance billing</p>
          <p style={this.props.format.eduTextStyle} className="list-group-item-text">● Research and resolve dosage conflicts,
            potentially harmful drug interactions, insurance issues and other matters to ensure patient safety/wellness
            and build customer loyalty</p>
        </a>
      </div>
    )
  }
})

module.exports = Experience;
