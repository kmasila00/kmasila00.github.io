var React = require('react');
var MediaQuery = require('react-responsive');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function (){
		return (
			<div>
				<div className="jumbotron" style={this.props.format.headerBg}>
					<div style={this.props.format.vertAlign}>
						<img style={this.props.format.mainPic} src={require('../images/kelvin.jpg')}/>
						<h1 style={this.props.format.headerH1}>Kelvin Masilamani</h1>
						<p style={this.props.format.subHeader}>Fullstack Software Engineer</p>
						<div style={this.props.format.imageAlign}>
							<a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani" >
								<img style={this.props.format.linkedinSize} src={'https://image.flaticon.com/icons/svg/34/34405.svg'} />
							</a>
							<a target="_blank" href="https://github.com/kmasila00" >
								<img style={this.props.format.gitSize} src={'http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'} />
							</a>
							<img style={this.props.format.documentSize} src={'https://cdn3.iconfinder.com/data/icons/files/100/237033-file_document__text_word-512.png'} />
						</div>
					</div>
				</div>
				<div className="jumbotron" style={this.props.format.bottomBg}>
					<MediaQuery query='(max-device-width:450px)'>
						<div>
							<Link to='/profile'>
								<img style={this.props.format.routerImg} src={require('../images/profile.png')}/>
							</Link>
						</div>
						<div>
							<Link to='/timeline'>
								<img style={this.props.format.routerImg} src={require('../images/edu.png')}/>
							</Link>
						</div>
						<div>
							<Link to='/projects'>
								<img style={this.props.format.routerImg} src={require('../images/project.png')}/>
							</Link>
						</div>
					</MediaQuery>
					<MediaQuery query='(min-device-width:760px)'>
						<div className="hovering" style={this.props.format.vertAlign}>
								<Link to='/profile'>
									<img className="profileImg" style={this.props.format.routerImg} src={require('../images/profile.png')}/>
								</Link>
								<Link to='/timeline'>
									<img className="eduImg" style={this.props.format.routerImg} src={require('../images/project.png')}/>
								</Link>
								<Link to='/projects'>
									<img className="projectImg" style={this.props.format.routerImg} src={require('../images/edu.png')}/>
								</Link>
								<div className="sibling">
									<span className="profileText label label-primary">About Me</span>
									<span className="eduText label label-primary">Education</span>
									<span className="projectText label label-primary">Projects</span>
								</div>
						</div>
					</MediaQuery>
				</div>
			</div>
		)
	}
});

module.exports = Home;
