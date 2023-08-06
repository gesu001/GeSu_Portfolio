import React from 'react';

import webImg from '../../src/images/web-developer.jpg'

 const styles = {
  bg: {
    backgroundImage: `url(${webImg})`,
    height: '8vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPosition: 'bottom',
  },
  footer: {
    color: 'yellow',
    padding: 10,
    fontSize: 25,
    text: 'center',
  }
}

function Footer() {
  return (
    <div style={styles.bg} className='fixed-bottom'>
        <h1 style={styles.footer} className='text-center'>Welcome visit my Github</h1>
        <div className="d-flex justify-content-center mt-4" md="12">
                <div md="3" className="d-flex justify-content-around">
                  <a href><icon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href><icon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href><icon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </div>
              </div>
    </div>
  );
}

export default Footer;
