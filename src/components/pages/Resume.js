import React from 'react';

export default function Resume() {
  return (
    <div>
      <div className="p-5 mb-5">  
        <div className="card bg-info text-dark h-100">
        <h1 className="card-title p-5">Resume</h1>
        <div  className="row g-3">
        <div className="col-6 px-5">
            <h2 className="card-title">Front-end Proficienies</h2>
            <div className="card-text fs-3 p-3">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="col-6 px-5">
            <h2 className="card-title">Back-end Proficienies</h2>
            <div className="card-text fs-3 p-3">
              <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL Sequelize</li>
                <li>MongoDB, Moongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}
