import profile from '../images/profile.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Home = () => {
  return (
    <div className="container-body">
      <div className="container d-flex justify-content-center">
        <div className="m-3" style={{ width: '30%' }}>
          <img src={profile} height={280}></img>
        </div>
        <div>
          <h3 className="mt-3 mb-3">
            I am future
            <span style={{ color: '#00d8fe' }}> Front-End</span> developer
          </h3>
          <p>
            As a person I am positive and career oriented. I am interested in
            the new technologies and trends in coding. I love changes and trying
            new and exciting things that help me evolve professionally.
          </p>
          <ButtonToolbar>
            <Link to="/about">
              <Button className="m-2, btn_second">About Me</Button>
            </Link>
          </ButtonToolbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
