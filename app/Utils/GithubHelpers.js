var axios = require('axios');

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getPlayerInfo: function(players){
    return axios.all(players.map(function(elem){
      return getUserInfo(elem);
    }))
    .then(function(info){
      return info.map(function(user){
        return user.data;
      })
    })
    .catch(function(err){
      console.log('Error in getPlayerInfo', err);
    })
  }
};

module.exports = helpers;
