var React = require('react');
var PropTypes = React.PropTypes;

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function InputField (props) {
  return (
    <input className="form-control"
      type="text"
      placeholder="St. George, Utah"
      value={props.city}
      onChange={props.onUpdateCity} />
  )
}

function Button (props) {
  return (
    <button type="button"
      className="btn btn-success"
      style={{margin: 10}}
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function GetCity (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
