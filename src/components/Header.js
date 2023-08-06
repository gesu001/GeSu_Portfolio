import React from 'react';
import webImg from '../../src/images/web-developer.jpg'

 const styles = {
  bg: {
    backgroundImage: `url(${webImg})`,
    height: '20vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  header: {
    color: 'yellow',
    padding: 10,
    fontSize: 100,
    margin: 10,
  }
}

function Header() {
  return (
    <div style={styles.bg}>
      
    <h2 style={styles.header}>Ge Su</h2>
  </div>
  );
}

export default Header;
