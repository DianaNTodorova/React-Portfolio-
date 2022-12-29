import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ close, children }) => {
  return (
    <div className="overlay">
      <div className="content">
        <AiOutlineCloseCircle
          onClick={close}
          className="icons"
          style={{
            backgroundColor: '#fff',
            position: 'absolute',
            right: '2rem',
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
