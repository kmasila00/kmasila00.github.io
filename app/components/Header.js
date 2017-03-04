var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');

var Header = React.createClass({
	render: function (){
		return (
			<div className="jumbotron" style={styles.headerBg}>
				<h1 style={styles.headerH1}>Kelvin Masilamani</h1>
          <p style={styles.subHeader}>Fullstack Software Engineer</p>
          <p style={styles.phoneEmail}>P: 718-813-8325</p>
          <p style={styles.phoneEmail}>E: kmasila00@gmail.com</p>
					<div style={styles.imageAlign}>
						<a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani" >
							<img style={styles.linkedinSize} src={'https://image.flaticon.com/icons/svg/34/34405.svg'} />
						</a>
						<a target="_blank" href="https://github.com/kmasila00" >
							<img style={styles.gitSize} src={'http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'} />
						</a>
						<img style={styles.documentSize} src={'https://cdn3.iconfinder.com/data/icons/files/100/237033-file_document__text_word-512.png'} />
					</div>
			</div>
		)
	}
});

module.exports = Header;