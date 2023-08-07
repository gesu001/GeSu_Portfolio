import React from 'react';
import reactImg from '../../images/react.png';
import apiImg from '../../images/api.jpg';
import nodeImg from '../../images/node.png';
import mysqlImg from '../../images/mysql.jpg';
import weatherImg from '../../images/weather.png';
import networkImg from '../../images/social-network.png';



export default function Project() {
  return (
    <div className='container text-center'>
      <h1 className="card-title py-2">My Projects</h1>
      <div className='d-flex row justify-content-evenly'>
        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
          <a href="https://github.com/gesu001/GeSu_Portfolio" target="_blank" rel="noreferrer">
            <img src={reactImg} alt="react project" className='w-100'></img>
            <div className="card-img-overlay">
              <h3 className="card-title">My Portfolio</h3> 
            </div>
          </a>
        </div>

        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded opacity-25-hover">
          <a href="https://gesu001.github.io/An-Interactive-Front-End-Project/" target="_blank" rel="noreferrer" >
            <img src={apiImg} alt="api project" className='w-100'/>
            <div className="card-img-overlay">
              <h3 className="card-title">An Interactive Front-End Project</h3> 
            </div>
          </a>
        </div>
    
        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
          <a href="https://project-inventory-ff35c68cb7af.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={nodeImg} alt="node project" className='w-100'/>
            <div className="card-img-overlay">
              <h3 className="card-title">Warehourse Inventory</h3> 
            </div>
          </a>
        </div>
   
        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
          <a href="https://github.com/gesu001/Employee-Tracker" target="_blank" rel="noreferrer">
            <img src={mysqlImg} alt="mysql project" className='w-100' />
            <div className="card-img-overlay">
              <h3 className="card-title">Employee Tracker</h3> 
            </div>
          </a>
        </div>
        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
          <a href="https://gesu001.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
            <img src={weatherImg} alt="Weather Dahboard project" className='w-100' />
            <div className="card-img-overlay">
              <h3 className="card-title">Weather Dashboard</h3> 
            </div>
          </a>
        </div>

        <div className="card text-bg-dark col-lg-3 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
          <a href="https://github.com/gesu001/Social-Network-API" target="_blank" rel="noreferrer">
            <img src={networkImg} alt="Social Network project" className='w-100' />
            <div className="card-img-overlay">
              <h3 className="card-title ">Social Network</h3> 
            </div>
          </a>
        </div>
    
      </div>
    </div>
  );
}
