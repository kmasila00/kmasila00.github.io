'use strict'

var w = window.innerWidth;
var styles;

var standard = {
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
	}
};

var mobile = {
	//header styles
	headerBg: {
		backgroundColor: '#D5D5D5',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		marginLeft: 150,
		marginRight: 150,
		marginTop: 20
	},
	headerH1: {
		marginTop: -28,
		marginBottom: 0,
		textAlign: "center",
		fontSize: 75
	},
	subHeader: {
		fontSize: 44,
		marginBottom: 3,
	},
	phoneEmail: {
		fontSize: 34,
		marginBottom: 3
	},
	linkedinSize:{
		height: 60,
		width: 60,
		marginTop: 10
	},
	gitSize: {
		paddingTop: 10,
		height: 75,
		width: 100
	},
	documentSize: {
		height: 60,
		width: 60,
		marginTop: 10
	}
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
