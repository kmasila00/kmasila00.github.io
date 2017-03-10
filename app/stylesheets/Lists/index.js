'use strict'

var w = window.innerWidth;
var styles;

var standard = {
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
  aboutMeBox: {
    backgroundColor: '#D5D5D5',
    borderColor: '#D5D5D5',
    marginLeft: w * 0.28,
    marginRight: w * 0.28,
    marginBottom: 30
  }
};

var mobile = {
  textStyle: {
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 26
	},
	listHeading:{
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 60,
		paddingBottom: 10
	},
	aboutMeBox: {
		backgroundColor: '#D5D5D5',
		borderColor: '#D5D5D5',
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
