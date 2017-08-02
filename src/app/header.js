import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F78C0A'
  },
  title: {
    flex: 1,
    height: '66px',
    fontFamily: 'Questrial',
    fontSize: '66px',
    fontWeight: 'bold',
    letterSpacing: '15px',
    width: '61.018131%',
    margin: '52px',
    display: 'inline-flex'
  },
  loginSignup: {
    width: '7.3919%',
    height: '36px',
    backgroundColor: '#524645',
    color: '#FFF',
    fontFamily: 'Questrial',
    borderRadius: '5px',
    padding: '6px 10px 6px 10px',
    fontSize: '22px',
    border: 'none',
    marginRight: '25px',
    float: 'right',
    marginTop: '50px',
    outline: 'none',
    cursor: 'pointer',
    transition: '0.5s'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <div style={styles.title}>
            MusicMerchant
        </div>
        <div>
          <button style={styles.loginSignup}>Login</button>
          <button style={styles.loginSignup}>Signup</button>
        </div>
      </header>
    );
  }
}
