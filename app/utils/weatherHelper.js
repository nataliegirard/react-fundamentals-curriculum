var axios = require('axios');

var key = 'd759111f8240732a102578db9b225ca1';
var param = "&appid=" + key;

function getCurrentWeatherData (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + param)
}

function getWeatherForecastData (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + param + '&cnt=5')
}

/*
function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}*/

var helpers = {
  getCurrentWeather: function (city) {
    return getCurrentWeatherData(city)
      .then(function (res) {
        console.log(res.data);
        return res.data
      })
      .catch(function (err) {
        console.warn('Error in getCurrentWeather', err)
      })
  },
  getWeatherForecast: function (city) {
    return getWeatherForecastData(city)
      .then(function (res) {
        console.log(res.data);
        return res.data
      })
      .catch(function (err) {
        console.warn('Error in getWeatherForecast', err)
      })
  }
/*
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err)
    })
  },
  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) { console.warn('Error in getPlayersInfo: ', err)})
  }*/
};

module.exports = helpers;
