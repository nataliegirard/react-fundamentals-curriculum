var React = require('react');

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

module.exports = GetCity;
