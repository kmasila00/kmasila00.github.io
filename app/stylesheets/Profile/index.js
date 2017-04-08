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
		width:'15%',
    float: 'left',
    zIndex: 5,
    paddingRight: 10
	},
  thirdPic: {
		borderRadius: '50%',
		width:'15%',
    float: 'right',
    zIndex: 5
	},
  firstP : {
    float: "left",
    textAlign: 'left'
  },
  thirdP : {
    float: "right",
    textAlign: 'right'
  },
  title: {
    fontSize: 80,
    textAlign: 'center'
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
		width:'30%',
    float: 'left',
    zIndex: 5,
    paddingRight: 10
	},
  thirdPic: {
		borderRadius: '50%',
		width:'30%',
    float: 'right',
    zIndex: 5
	},
  title: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 40
  },
  para: {
    fontSize: 40
  }
};

module.exports = {ProfileStyles, MQProfileStyles};
