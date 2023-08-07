import React from 'react';
import reactImg from '../../images/react.png';
import apiImg from '../../images/api.jpg';
import nodeImg from '../../images/node.png';
import mysqlImg from '../../images/mysql.jpg';


export default function Blog() {
  return (
    <div className='container-fluid text-center py-5'>
      
    <div className='d-flex row justify-content-evenly'>

    <div className="card text-bg-dark col-lg-4 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
      <a href="https://github.com/gesu001/GeSu_Portfolio" target="_blank" rel="noreferrer">
          <img src={reactImg} alt="api project" className='w-100'></img>
          <div className="card-img-overlay">
            <h2 className="card-title p-4">My Portfolio</h2> 
          </div>
        </a>
        </div>

   

        <div className="card text-bg-dark col-lg-4 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded opacity-25-hover">
        <a href="https://gesu001.github.io/An-Interactive-Front-End-Project/" target="_blank" rel="noreferrer" >
          <img src={apiImg} alt="react project" className='w-100'/>
          <div className="card-img-overlay">
            <h2 className="card-title p-4">An Interactive Front-End Project</h2> 
          </div>
        </a>
        </div>
    

        <div className="card text-bg-dark col-lg-4 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
        <a href="https://project-inventory-ff35c68cb7af.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={nodeImg} alt="node project" className='w-100'/>
          <div className="card-img-overlay">
            <h2 className="card-title p-4">Warehourse Inventory</h2> 
          </div>
        </a>
        </div>
   

        <div className="card text-bg-dark col-lg-4 col-md-6 shadow p-3 m-5 bg-body-tertiary rounded">
        <a href="https://github.com/gesu001/Employee-Tracker" target="_blank" rel="noreferrer">
          <img src={mysqlImg} alt="mysql project" className='w-100' />
          <div className="card-img-overlay">
            <h2 className="card-title p-4">Employee Tracker</h2> 
          </div>
        </a>
        </div>
    
    </div>
    </div>
  );
}
