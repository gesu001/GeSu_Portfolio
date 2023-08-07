import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div className='d-flex justify-content-center py-2'>
      <div className='p-2'>
        <a href='https://github.com/gesu001' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='fa-3x'/>
        </a>
      </div>
      <div className='p-2'>
        <a href='https://www.linkedin.com/in/ge-su-4b319388/'target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='fa-3x'/>
        </a>
      </div>
      <div className='p-2'>
        <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className='fa-3x'/>
        </a>
      </div>    
  </div>
  );
}

export default Footer;
