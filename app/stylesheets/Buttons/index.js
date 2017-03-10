'use strict'

var w = window.innerWidth;
var styles;

var standard = {
  buttonStyle: {
		backgroundColor: '#D5D5D5',
		borderColor: '#333333',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 20
	},
	buttonPanelStyle: {
		marginLeft: w * 0.28,
		marginRight: w * 0.28,
		marginBottom: 30
	}
};

var mobile = {
  buttonStyle: {
		backgroundColor: '#D5D5D5',
		borderColor: '#333333',
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 40
	},
	buttonPanelStyle: {
		marginLeft: 190,
		marginRight: 190,
		marginBottom: 30
	}
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
