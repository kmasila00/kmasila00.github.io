var React = require('react');
var styles = require('../styles');
var MediaQuery = require('react-responsive');

var Header = React.createClass({
	render: function (){
		return (
			<div>
				<MediaQuery query='(max-device-width:450px)'>
					<div className="jumbotron" style={styles.MQheader.headerBg}>
						<h1 style={styles.MQheader.headerH1}>Kelvin Masilamani</h1>
						<p style={styles.MQheader.subHeader}>Fullstack Software Engineer</p>
						<p style={styles.MQheader.phoneEmail}>P: 718-813-8325</p>
						<p style={styles.MQheader.phoneEmail}>E: kmasila00@gmail.com</p>
						<div style={styles.MQheader.imageAlign}>
							<a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani" >
								<img style={styles.MQheader.linkedinSize} src={'https://image.flaticon.com/icons/svg/34/34405.svg'} />
							</a>
							<a target="_blank" href="https://github.com/kmasila00" >
								<img style={styles.MQheader.gitSize} src={'http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'} />
							</a>
							<img style={styles.MQheader.documentSize} src={'https://cdn3.iconfinder.com/data/icons/files/100/237033-file_document__text_word-512.png'} />
						</div>
					</div>
				</MediaQuery>
				<MediaQuery query='(min-device-width:760px)'>
					<div className="jumbotron" style={styles.header.headerBg}>
						<h1 style={styles.header.headerH1}>Kelvin Masilamani</h1>
						<p style={styles.header.subHeader}>Fullstack Software Engineer</p>
						<p style={styles.header.phoneEmail}>P: 718-813-8325</p>
						<p style={styles.header.phoneEmail}>E: kmasila00@gmail.com</p>
						<div style={styles.header.imageAlign}>
							<a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani" >
								<img style={styles.header.linkedinSize} src={'https://image.flaticon.com/icons/svg/34/34405.svg'} />
							</a>
							<a target="_blank" href="https://github.com/kmasila00" >
								<img style={styles.header.gitSize} src={'http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'} />
							</a>
							<img style={styles.header.documentSize} src={'https://cdn3.iconfinder.com/data/icons/files/100/237033-file_document__text_word-512.png'} />
						</div>
					</div>
				</MediaQuery>
			</div>
		)
	}
});

module.exports = Header;
