var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
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
    console.log(this.state.city)
    this.context.router.push('/forecast/' + this.state.city)
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
