'use strict'

var styles;

var standard = {
	outer: {
		backgroundColor: '#037971',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		marginBottom: 0,
		display: 'table',
		position: 'absolute',
		height: '100%',
		width: '100%'
	},
	middle:{
		display: 'table-cell',
		verticalAlign: 'middle'
	},
	inner: {
		textAlign: 'center'
	},
	mainPic: {
		borderRadius: '50%',
		width:'15.5%'
	},
	headerH1: {
		marginTop: -5,
		marginBottom: -5,
		textAlign: "center",
		fontSize: 100,
		color: 'white'
	},
	subHeader: {
		fontSize: 36,
		marginBottom: -5,
		color: 'white'
	},
	linkSize:{
		height: 40,
		width: 40,
		marginTop: 10,
		marginRight: 10,
		cursor: 'pointer'
	},
	imageAlign: {
		marginBottom: 10
	},
	naviContent: {
		display: 'inline',
		paddingLeft: 5,
		fontSize: 20,
		color: 'white',
		cursor: 'pointer'
	}
};

var mobile = {
	//header styles
	outer: {
		backgroundColor: '#037971',
		borderColor: '#000000',
		fontFamily: "Calibri",
		color:'#000000',
		marginBottom: 0,
		display: 'table',
		position: 'absolute',
		height: '100%',
		width: '100%'
	},
	middle:{
		display: 'table-cell',
		verticalAlign: 'middle'
	},
	inner: {
		textAlign: 'center'
	},
	mainPic: {
		borderRadius: '50%',
		width:'45.5%'
	},
	headerH1: {
		marginTop: -5,
		marginBottom: -5,
		textAlign: "center",
		fontSize: 125,
		color: 'white'
	},
	subHeader: {
		fontSize: 65,
		color: 'white'
	},
	linkSize:{
		width: 95,
		marginTop: 10,
		marginRight: 20,
		cursor: 'pointer'
	},
	imageAlign: {
		marginBottom: 15
	},
	naviContent: {
		display: 'inline',
		paddingLeft: 8,
		fontSize: 45,
		color: 'white',
		cursor: 'pointer'
	}
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
