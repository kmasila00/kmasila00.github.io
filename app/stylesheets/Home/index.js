'use strict'

var w = window.innerWidth;
var h = window.innerHeight;
var styles;

var standard = {
	headerBg: {
		backgroundColor: '#037971',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		height: h/2,
		display: 'table',
		width: '100%',
		marginBottom: 0
	},
	vertAlign:{
		display:'table-cell',
		verticalAlign:'middle'
	},
	bottomBg:{
		backgroundColor: '#00BFB3',
		height: h/2,
		display: 'table',
		width: '100%',
		marginBottom: 0,
		textAlign: 'center',
		display: 'table',
		width: '100%'
	},
	mainPic: {
		marginTop: -20,
		borderRadius: '50%',
		width:'11.5%'
	},
	headerH1: {
		marginTop: -8,
		marginBottom: -15,
		textAlign: "center",
		fontSize: 100
	},
	subHeader: {
		fontSize: 24,
		marginBottom: -10
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
	routerImg:{
		width: '15%',
		cursor: 'pointer',
		marginRight: 10
	},
	imageAlign:{
		marginBottom: -20
	}
};

var mobile = {
	//header styles
	headerBg: {
		backgroundColor: '#037971',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		height: h/2,
		display: 'table',
		width: '100%',
		marginBottom: 0
	},
	mainPic: {
		borderRadius: '50%',
		width:'30%',
		marginTop: -20
	},
	vertAlign:{
		display:'table-cell',
		verticalAlign:'middle'
	},
	bottomBg:{
		backgroundColor: '#00BFB3',
		height: h/2,
		display: 'table',
		width: '100%',
		marginBottom: 0,
		textAlign: 'center'
	},
	headerH1: {
		marginTop: -10,
		marginBottom: 0,
		textAlign: "center",
		fontSize: 120
	},
	subHeader: {
		fontSize: 70,
		marginBottom: 3,
	},
	phoneEmail: {
		fontSize: 65,
		marginBottom: 3
	},
	linkedinSize:{
		height: 100,
		width: 100,
		marginTop: 20
	},
	gitSize: {
		paddingTop: 10,
		height: 131.25,
		width: 175
	},
	documentSize: {
		height: 100,
		width: 100,
		marginTop: 20
	}
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
