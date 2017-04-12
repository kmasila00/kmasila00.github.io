'use strict'

var h = window.innerHeight;
var ProfileStyles = {
  headerBg: {
		backgroundColor: '#037971',
		display: 'table',
		width: '100%',
		marginBottom: 0,
    paddingLeft:90,
    paddingRight:90,
    paddingTop: 0
	},
  columnVert:{
    display: 'table',
		width: '100%',
  },
	vertAlign:{
		display:'table-cell',
		verticalAlign:'middle',
	},
	firstPic: {
		borderRadius: '50%',
		width:'17%',
    float: 'left',
    zIndex: 5,
    marginRight: 22,
    paddingBottom: 1
	},
  thirdPic: {
		borderRadius: '50%',
		width:'17%',
    float: 'right',
    zIndex: 5,
    marginLeft: 30
	},
  para:{
    color: 'white'
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'white'
  }
};

var MQProfileStyles = {
  headerBg: {
		backgroundColor: '#037971',
		display: 'table',
		width: '100%',
		marginBottom: 0,
    paddingLeft:90,
    paddingRight:90
	},
  columnVert:{
    display: 'table',
		width: '100%',
  },
	vertAlign:{
		display:'table-cell',
		verticalAlign:'middle',
	},
	firstPic: {
		borderRadius: '50%',
		width:'35%',
    float: 'left',
    zIndex: 5,
    marginRight: 30
	},
  thirdPic: {
		borderRadius: '50%',
		width:'35%',
    float: 'right',
    zIndex: 5,
    marginLeft: 40
	},
  title: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white'
  },
  para: {
    fontSize: 40,
    color: 'white'
  }
};

module.exports = {ProfileStyles, MQProfileStyles};
