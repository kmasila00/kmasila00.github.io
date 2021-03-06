'use strict'

var standard = {
  leftBg: {
    backgroundColor: '#037971',
    borderColor: '#000000',
    height: 2600,
    position: 'relative',
    textAlign: 'center',
    marginBottom: 0
  },
  rightBg: {
    backgroundColor: '#D4F4DD',
    borderLeftWidth: 5,
    borderLeftColor: 'black',
    height: 2600,
    position: 'relative',
    marginBottom: 0
  },
  overlay: {
    position: 'absolute',
    zIndex: 20,
    left: '49.25%'
  },
  overlay2: {
    position: 'absolute',
    zIndex: 40,
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: 80,
    color: 'white',
    textShadow: '4px 4px #000000'
  },
  markers: {
    marker1:{
      marginLeft: 26.5,
      top: 80,
      fontSize: 40
    },
    marker2:{
      marginLeft: 26.5,
      top: 380,
      fontSize: 40
    },
    marker3:{
      marginLeft: 26.5,
      top: 680,
      fontSize: 40
    },
    marker4:{
      marginLeft: 26.5,
      top: 980,
      fontSize: 40
    },
    marker5:{
      marginLeft: 26.5,
      top: 1280,
      fontSize: 40
    },
    marker6:{
      marginLeft: 26.5,
      top: 1580,
      fontSize: 40
    },
    marker7:{
      marginLeft: 26.5,
      top: 1900,
      fontSize: 40
    }
  },
  //MOBILE RESPONSE
  MQbg:{
    backgroundColor: '#D4F4DD',
    borderLeftWidth: 5,
    borderLeftColor: 'black',
    height: 4683,
    position: 'relative',
    textAlign: 'center',
    marginBottom: 0
  },
  MQtitle:{
    fontSize: 100,
    color: 'white',
    textShadow: '6px 6px #000000'
  },
  MQoverlay: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    textAlign: 'left'
  },
  MQoverlay2: {
    position: 'absolute',
    zIndex: 40,
    marginTop: 20
  },
  MQmarkers: {
    marker1:{
      marginLeft: 30,
      top: 0,
      fontSize: 90
    },
    marker2:{
      marginLeft: 30,
      top: 850,
      fontSize: 90
    },
    marker3:{
      marginLeft: 30,
      top: 1515,
      fontSize: 90
    },
    marker4:{
      marginLeft: 30,
      top: 1960,
      fontSize: 90
    },
    marker5:{
      marginLeft: 30,
      top: 2600,
      fontSize: 90
    },
    marker6:{
      marginLeft: 30,
      top: 3000,
      fontSize: 90
    },
    marker7:{
      marginLeft: 30,
      top: 3400,
      fontSize: 90
    }
  }
}

module.exports = standard;
