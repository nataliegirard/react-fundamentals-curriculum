var React = require('react');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  },
  button: {
    margin: 10
  }
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <div style={styles.formContainer}>
        <input className="form-control" type="text" placeholder="St. George, Utah" />
        <button type="button" className="btn btn-success" style={styles.button}>Get Weather</button>
      </div>
    </div>
  )

};

module.exports = Home;
