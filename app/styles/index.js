var w = window.innerWidth;

var styles = {
	//header styles
	headerBg: {
		backgroundColor: '#3369D4',
    fontFamily: "Lucida Console",
    color:'#000000',
		textAlign: 'center',
		marginLeft: w * 0.24,
		marginRight: w * 0.24,
		marginTop: 20
	},
	headerH1: {
		marginTop: -28,
		marginBottom: 0,
		textAlign: "center"
	},
	subHeader: {
		fontSize: 23,
    marginBottom: 3,
	},
	phoneEmail: {
		fontSize: 12,
		marginBottom: 3
	},
	linkedinSize:{
		height: 35,
		width: 35,
		marginTop: 10
	},
	gitSize: {
		paddingTop: 10,
		height: 55,
		width: 70
	},
	documentSize: {
		height: 40,
		width: 40,
		marginTop: 10
	},
	//list styles
	textStyle: {
		fontFamily: "Lucida Console",
    color:'#000000',
		textAlign: 'center'
	},
	listHeading: {
		fontFamily: "Lucida Console",
    color:'#000000',
		textAlign: 'center',
		fontSize: 30,
		paddingBottom: 10
	},
	projectHeading: {
		fontFamily: "Lucida Console",
    color:'#000000',
		textAlign: 'center'
	},
	aboutMeBox: {
		backgroundColor: '#3369D4',
		borderColor: '#3369D4',
		marginLeft: w * 0.28,
		marginRight: w * 0.28,
		marginBottom: 30
	},
	buttonStyle: {
		eduexp : {
			backgroundColor: '#3369D4',
			borderColor: '#333333',
			fontFamily: "Lucida Console",
	    color:'#000000',
			textAlign: 'center',
			fontSize: 20
		},
		projects: {
			backgroundColor: '#3369D4',
			borderColor: '#333333',
			fontFamily: "Lucida Console",
	    color:'#000000',
			textAlign: 'center',
			fontSize: 20
		}
	},
	buttonPanelStyle: {
		marginLeft: w * 0.28,
		marginRight: w * 0.28,
		marginBottom: 30
	},
	//Education and Experience page
	EEpageStyle: {
		marginLeft: w > 1300 ? w * 0.05 : 0,
		marginRight: w > 1300 ? w * 0.05 : 0,
	},
	eduNameStyle: {
		paddingLeft: 10,
		fontFamily: "Lucida Console",
    color:'#000000',
		textDecoration: 'underline'
	},
	eduTextStyle: {
		paddingLeft: 10,
		fontFamily: "Lucida Console",
    color:'#000000'
	},
	tabsBgColor: {
		backgroundColor: '#3369D4'
	},
	//Project buttons
	projectButtonPanel: {
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 20
	},
	// Panel styles
	panelSize: {
		marginLeft: 25,
		marginRight: 25
	},
	panelBox: {
		backgroundColor: '#3369D4',
		borderColor: '#3369D4',
		marginBottom: 30
	},
	imgSize: {
		marginTop: 20,
		marginBottom: 20,
		width: w - 100
	}
};

module.exports = styles;
