import React from 'react';
import webImg from '../../src/images/web-developer.jpg'
const styles = {
  bg: {
    backgroundImage: `url(${webImg})`,
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

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div style={styles.bg}>

      <div className>
        <div>
        <h2 style={styles.header}>Ge Su</h2>
        </div>

        <div>
          <ul className="nav nav-tabs color-yellow">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
  </div>
    </div>
  );
}

export default NavTabs;
