var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var weatherHelper = require('../utils/weatherHelper');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function (e) {
    e.preventDefault();

    weatherHelper.getCurrentWeather(this.state.city)
      .then(function (weatherData) {
        console.log(weatherData);
      }.bind(this))
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
