import profile from '../images/profile.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Tabs from './Tabs';
import Card from './Card';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container-body">
      {/* First Section */}
      <section className="full-screen-section">
        <div className="container d-flex justify-content-center mt-5">
          <div className="m-3" style={{ width: '30%' }}>
            <img src={profile} height={280} alt="Profile" />
          </div>
          <div className="mt-5 ms-5">
            <div className="gradient-bg p-3 mb-4 px-5 ps-2 d-inline-flex bg-info bg-opacity-10 border border-2 border-info border-start-0 rounded-end text-light">
              Welcome to my Portfolio!
            </div>
            <h3 className="mt-3 mb-3 fs-2 text">
              I am future
              <span style={{ color: '#00d8fe' }}> Front-End</span> developer
            </h3>
            <p>
              As a person I am positive and career oriented. I am interested in
              the new technologies and trends in coding. I love changes and
              trying new and exciting things that help me evolve professionally.
            </p>
            <ButtonToolbar>
              <Link to="/about">
                <Button className="mt-4 mb-3 btn_second">About Me</Button>
              </Link>
            </ButtonToolbar>
          </div>
        </div>
        {/* Scroll Button */}
        <button className="scroll-button" onClick={scrollToProjects}>
          <ArrowIcon />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="full-screen-section">
        <div className="container flex-column justify-content-center">
          <h3 className="mt-5 pt-3 mb-3 fs-2 text">Projects</h3>
          <p className="text-center" style={{ color: '#00d8fe' }}>
            Below are some of the projects I've developed using HTML, CSS,
            Bootstrap, JavaScript, React, and Tailwind CSS. These projects
            showcase my skills in front-end development, responsive design, and
            modern web technologies.
          </p>
        </div>
        <Tabs />
        <div className="container flex-row justify-content-center">
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Home;
