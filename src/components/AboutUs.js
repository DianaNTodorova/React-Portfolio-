import React, { Component } from 'react';
import careerpath from '../images/careerpath.jpeg';
import frontenddeveloper from '../images/frontenddeveloper.png';

const About = () => {
  return (
    <div className="container-body">
      <div className="container pt-5 pb-5">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={careerpath}
                className="card-img-top"
                alt="Career change"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#00d8fe' }}>
                  Career change
                </h5>
                <p className="card-text">
                  I want to change my career path for future growth potential,
                  new challenges and most importantly - personal interest in the
                  area. I feel my current skills and experience will transfer
                  well into the new path I have chosen. I believe that starting
                  this course will give me a structure, the necessary knowledge
                  and boost for the career opportunity in the IT industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={frontenddeveloper}
                className="card-img-top"
                alt="Future Front-end Developer"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#00d8fe' }}>
                  Future Front-end Developer
                </h5>
                <p className="card-text">
                  I will become a good developer because I am passionate,
                  motivated, skilled and have huge interest in the Industry. I
                  would be able to use my current skills and experience to take
                  the next step and transform them into something better and
                  complete. In my career so far I have developed professional
                  graphic skills and worked years with content creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
