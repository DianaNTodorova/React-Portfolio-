import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const ArrowComponent = () => {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <i className="fa-solid fa-chevron-down"></i>
      <i className="fa-solid fa-chevron-down arrow"></i>
    </div>
  );
};

export default ArrowComponent;
