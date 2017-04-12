var React = require('react');
var MediaQuery = require('react-responsive');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function (){
		return (
				<div style={this.props.format.outer}>
					<div style={this.props.format.middle}>
						<div style={this.props.format.inner}>
							<img style={this.props.format.mainPic} src={require('../images/kelvin.jpg')}/>
							<h1 style={this.props.format.headerH1}>Kelvin Masilamani</h1>
							<p style={this.props.format.subHeader}>Fullstack Software Engineer</p>
							<div style={this.props.format.imageAlign}>
								<a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani" >
									<img style={this.props.format.linkSize} src={require('../images/linkedin.png')}/>
								</a>
								<a target="_blank" href="https://github.com/kmasila00" >
									<img style={this.props.format.linkSize} src={require('../images/github.png')}/>
								</a>
								<a target="_blank" href="https://drive.google.com/open?id=0BzrG0O5s1LCpYkFnOUlzZUM2V0U">
									<img style={this.props.format.linkSize} src={require('../images/document.png')}/>
								</a>
							</div>
							<span style={this.props.format.naviContainer}>
								<Link to="/profile">
									<p style={this.props.format.naviContent}> About Me </p>
								</Link>
								<Link to="/timeline">
									<p style={this.props.format.naviContent}> The Timeline </p>
								</Link>
								<Link to="/projects">
									<p style={this.props.format.naviContent}> Projects </p>
								</Link>
							</span>
						</div>
					</div>
				</div>
		)
	}
});

module.exports = Home;
