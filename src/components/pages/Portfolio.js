import React from 'react';
import reactImg from '../../images/react.png';
import apiImg from '../../images/api.jpg';
import nodeImg from '../../images/node.png';
import mysqlImg from '../../images/mysql.jpg';

export default function Blog() {
  return (
    <div className='container text-center'>
      {/* <h1>Portfolio</h1> */}

      <div className='row justify-content-around'>

      <div className="col-lg-6 col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
      
        <h2>My Profio</h2>
        <a href="https://github.com/gesu001/GeSu_Portfolio" target="_blank" rel="noreferrer">
          <img src={reactImg} alt="react project" className='w-auto'></img>
        </a>
      </div>
    
      <div className="col-lg-6 col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2>An Interactive Front-End Project</h2>
        <a className="opacity-25 opacity-100-hover" href="https://gesu001.github.io/An-Interactive-Front-End-Project/" target="_blank" rel="noreferrer">
          <img src={apiImg} alt="react project" className='w-auto'></img>
        </a>
      </div>
  
      <div className="col-lg-6 col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2>Warehourse Inventory-A Interactive Full Stack Project</h2>
        <a href="https://project-inventory-ff35c68cb7af.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={nodeImg} alt="react project" className='w-auto'></img>
        </a>
      </div>
    
      <div className="col-lg-6 col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2>Warehourse Inventory-A Interactive Full Stack Project</h2>
        <a href="https://project-inventory-ff35c68cb7af.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={mysqlImg} alt="react project" className='w-auto'></img>
        </a>
      </div>

      </div>

    </div>
  );
}
