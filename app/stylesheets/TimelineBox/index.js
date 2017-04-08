'use strict'

var timelineBoxStyles = {

  logo: {
    float: 'left',
    width : 200,
    zIndex: 5
  },
  desc: {
    float: 'left',
    textAlign: 'left',
    width: 400
  },
  header: {
    paddingLeft: 15
  },
  subHeader: {
    paddingLeft: 15,
    fontStyle: 'italic'
  }

};

var MQtimelineBoxStyles = {

  logo: {
    float: 'left',
    width : 300,
    zIndex: 5
  },
  desc: {
    float: 'left',
    textAlign: 'left',
    width: 500
  },
  header: {
    paddingLeft: 15,
    fontSize: 45
  },
  subHeader: {
    paddingLeft: 15,
    fontStyle: 'italic',
    fontSize: 35
  },
  bullets: {
    fontSize: 30
  }

}

module.exports = {timelineBoxStyles, MQtimelineBoxStyles};
