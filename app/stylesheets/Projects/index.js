'use strict'

var w = window.innerWidth;
var styles;

var standard = {
  topAdjust:{
    marginTop: 20
  },
  projectHeading: {
		textAlign: 'center',
    fontSize: 80,
    marginTop: 30,
    marginBottom: 30
	},
	panelSize: {
		marginLeft: 25,
		marginRight: 25
	},
	panelBox: {
		backgroundColor: '#00BFB3',
		borderColor: '#00BFB3',
		marginBottom: 30
	},
	imgSize: {
		marginTop: 20,
		marginBottom: 20,
		width: w/2 - 100
	},
  aboutMeBox: {
    backgroundColor: '#00BFB3',
    borderColor: '#00BFB3',
    marginLeft: w * 0.28,
    marginRight: w * 0.28,
    marginBottom: 30
  },
  EEpageStyle: {
    marginLeft: w > 1300 ? w * 0.05 : 0,
    marginRight: w > 1300 ? w * 0.05 : 0,
  },
  eduNameStyle: {
		paddingLeft: 10,
		color:'#000000',
		textDecoration: 'underline',
		fontSize: 18
	},
	eduTextStyle: {
		paddingLeft: 10,
		color:'#000000',
		fontSize: 15
	},
  listHeading: {
    color:'#000000',
    fontSize: 36,
    paddingBottom: 10
  }
};

var mobile = {
  projectHeading: {
		textAlign: 'center',
		fontSize: 80,
    paddingTop: 25
	},
  aboutMeBox: {
    backgroundColor: '#00BFB3',
    borderColor: '#00BFB3',
    marginLeft: 190,
    marginRight: 190,
    marginBottom: 30
  },
  eduNameStyle:{
		paddingLeft: 10,
		color:'#000000',
		textDecoration: 'underline',
		fontSize: 30
	},
	eduTextStyle: {
		paddingLeft: 10,
		color:'#000000',
		fontSize: 26
	},
	listHeading:{
		color:'#000000',
		fontSize: 60,
		paddingBottom: 10
	},
  imgSize: {
		marginTop: 20,
		marginBottom: 20,
		width: w - 100
	},
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
