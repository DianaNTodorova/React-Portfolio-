import React from 'react';
import { useState } from 'react';
import call from '../images/call.png';
import Modal from './Modal';
import callperson from '../images/callperson.png';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="container-body">
      <div class="container d-flex justify-content-around pt-5 align-items-start">
        <form onSubmit={handleSubmit} className="col-sm-4">
          <div className="form-group">
            <label className="form-label mt-3" style={{ color: '#00d8fe' }}>
              Name
            </label>
            <input
              className="form-control mb-2"
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            {submit && !name ? (
              <span className="text-danger mb-2">Please enter your name!</span>
            ) : null}
          </div>
          <div className="form-group mb-3 ">
            <label className="form-label " style={{ color: '#00d8fe' }}>
              Email
            </label>
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {submit && !email ? (
              <span className="text-danger mb-2">Please enter your email!</span>
            ) : null}
          </div>
          <div className="form-group mb-3 ">
            <label
              className="form-label"
              style={{ color: '#00d8fe' }}
              for="floatingTextarea"
            >
              Message
            </label>
            <textarea
              class="form-control"
              value={message}
              placeholder="Message ..."
              style={{ height: '150px' }}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {submit && !message ? (
              <span className="text-danger mb-3">Please write a message!</span>
            ) : null}
          </div>
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#00d8fe' }}
          >
            Submit
          </button>
          {email && name && submit && message ? (
            <div className="textArea text-white mt-3 p-3 text-center">
              Thank you for your message! <br />
              Name: {name} <br />
              Email: {email} <br />
              Your Message: <br />
              {message}
            </div>
          ) : null}
        </form>

        <div className="col-sm-4 text-center">
          {open && (
            <Modal close={() => setOpen(false)}>
              <h2 style={{ backgroundColor: '#fff', margin: '2rem' }}>
                You booked a call!
              </h2>
              <img
                src={callperson}
                style={{ width: '250px', backgroundColor: '#fff' }}
              />
            </Modal>
          )}
          <div>
            <img
              src={call}
              alt="call"
              style={{
                width: '225px',
                marginBottom: '75px',
                marginTop: '75px',
              }}
            ></img>
          </div>
          <div>
            <button
              onClick={() => setOpen(true)}
              className="btn mt-3 text-white"
              style={{ backgroundColor: '#00d8fe' }}
            >
              Book a Call!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
