var React = require('react');
var MediaQuery = require('react-responsive');

var Profile = React.createClass({
  render() {
    return (
      <div className="jumbotron" style={this.props.format.headerBg}>
        <h1 style={this.props.format.title}>PROFILE</h1>
        <div>
          <img style={this.props.format.firstPic} src={require('../images/profilepic.png')}/>
          <span>
            <p style={this.props.format.para}>
              I first started coding as a sophomore in high school. I started with Visual Basic and Java eventually
              learning JavaScript in my free time. I attended The City College of New York as a Biology major and
              graduated with a degree in the science field. Even as a learned and made my way up the medical field,
              I made sure to make time for coding. It became more of a stress relief for me at that point.
            </p>
          </span>
          <p style={this.props.format.para}>
            After graduating, I became an EMT and pursed that as a career. Of course I was never able to get rid of
            the habit of sitting in front of a screen coding and reading up on new technologies and frameworks. I soon
            realized that I was enjoying my hobby more than my actual career and the passion I had for coding became the
            prevalent part of my life. I decided to switch careers and pursue software engineering. I start learning on
            my own before attending a full-time bootcamp to further learn and enhance my knowledge.
          </p>
          <img style={this.props.format.thirdPic} src={require('../images/javascript.jpg')}/>
          <span>
            <p style={this.props.format.para}>
              I have since worked on a few freelance projects while adding modern JavaScript technologies (React,
              Angular, Node, Express, Postgres) to my toolbelt. I currently work part time for a mobile start up company.
              I am most interested in front-end roles, but open to full-stack opportunities as well.
            </p>
          </span>
          <p style={this.props.format.para}>
            What do I know you ask?
          </p>
          <p style={this.props.format.para}>
            JavaScript, Node.js, React.js, React Native, Redux, Express.js, Sequelize, PostgreSQL, Angular.js, Promise.js, Github, HTML5, CSS3, D3.js, Jasmine, Mocha
          </p>
          <p style={this.props.format.para}>
            If you think I would be a good fit for your team, please feel free to reach out!
          </p>
        </div>
      </div>
      )
  }
})

module.exports = Profile;
