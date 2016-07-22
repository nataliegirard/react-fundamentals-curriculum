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

function GetCity (props) {
  return (
    <div style={getStyles(props)}>
      <input className="form-control" type="text" placeholder="St. George, Utah" />
      <button type="button" className="btn btn-success" style={{margin: 10}}>Get Weather</button>
    </div>
  )
}

module.exports = GetCity;
