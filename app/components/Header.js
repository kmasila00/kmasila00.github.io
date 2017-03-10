var React = require('react');
var MediaQuery = require('react-responsive');

var Header = React.createClass({
	render: function (){
		return (
			<div className="jumbotron" style={this.props.format.headerBg}>
				<h1 style={this.props.format.headerH1}>Kelvin Masilamani</h1>
				<p style={this.props.format.subHeader}>Fullstack Software Engineer</p>
				<p style={this.props.format.phoneEmail}>P: 718-813-8325</p>
				<p style={this.props.format.phoneEmail}>E: kmasila00@gmail.com</p>
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
		)
	}
});

module.exports = Header;
