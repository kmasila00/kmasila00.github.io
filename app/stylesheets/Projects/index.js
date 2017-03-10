'use strict'

var w = window.innerWidth;
var styles;

var standard = {
  projectHeading: {
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center'
	},
	projectButtonPanel: {
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 20
	},
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
	},
  aboutMeBox: {
    backgroundColor: '#D5D5D5',
    borderColor: '#D5D5D5',
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
  listHeading: {
    fontFamily: "Calibri",
    color:'#000000',
    textAlign: 'center',
    fontSize: 36,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#D5D5D5',
    borderColor: '#333333',
    fontFamily: "Calibri",
    color:'#000000',
    textAlign: 'center',
    fontSize: 20
  }
};

var mobile = {
  projectHeading: {
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 60
	},
  aboutMeBox: {
    backgroundColor: '#D5D5D5',
    borderColor: '#D5D5D5',
    marginLeft: 190,
    marginRight: 190,
    marginBottom: 30
  },
  eduNameStyle:{
		paddingLeft: 10,
		fontFamily: "Calibri",
		color:'#000000',
		textDecoration: 'underline',
		fontSize: 30
	},
	eduTextStyle: {
		paddingLeft: 10,
		fontFamily: "Calibri",
		color:'#000000',
		fontSize: 26
	},
	listHeading:{
		fontFamily: "Calibri",
		color:'#000000',
		textAlign: 'center',
		fontSize: 60,
		paddingBottom: 10
	}
};

styles = {
  REG: standard,
  MQ: mobile
};

module.exports = styles;
