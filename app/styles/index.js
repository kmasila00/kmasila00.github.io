var w = window.innerWidth;
console.log(w);
var styles;

styles = {
	//header styles
	headerBg: {
		backgroundColor: '#D5D5D5',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		marginLeft: w * 0.24,
		marginRight: w * 0.24,
		marginTop: 20
	},
	headerH1: {
		marginTop: -28,
		marginBottom: 0,
		textAlign: "center",
		fontSize: 75
	},
	subHeader: {
		fontSize: 34,
		marginBottom: 3,
	},
	phoneEmail: {
		fontSize: 16,
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
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 15
	},
	listHeading: {
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 36,
		paddingBottom: 10
	},
	projectHeading: {
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center'
	},
	aboutMeBox: {
		backgroundColor: '#D5D5D5',
		borderColor: '#D5D5D5',
		marginLeft: w * 0.28,
		marginRight: w * 0.28,
		marginBottom: 30
	},
	buttonStyle: {
		eduexp : {
			backgroundColor: '#D5D5D5',
			borderColor: '#333333',
			fontFamily: "Calibri",
			color:'#000000',
			textAlign: 'center',
			fontSize: 20
		},
		projects: {
			backgroundColor: '#D5D5D5',
			borderColor: '#333333',
			fontFamily: "Calibri",
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
		fontFamily: "Calibri",
		color:'#000000',
		textDecoration: 'underline',
		fontSize: 18
	},
	eduTextStyle: {
		paddingLeft: 10,
		fontFamily: "Calibri",
		color:'#000000',
		fontSize: 15
	},
	tabsBgColor: {
		backgroundColor: '#D5D5D5'
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
		backgroundColor: '#D5D5D5',
		borderColor: '#D5D5D5',
		marginBottom: 30
	},
	imgSize: {
		marginTop: 20,
		marginBottom: 20,
		width: w - 100
	}
};

module.exports = styles;
