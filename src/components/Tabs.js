import { useState } from 'react';
import { Card } from './Card';
import '../index.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container d-flex mt-3">
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          checked={activeTab === 1}
          onChange={() => setActiveTab(1)}
        />
        <label className="tab" htmlFor="radio-1">
          JavaScript
        </label>

        <input
          type="radio"
          id="radio-2"
          name="tabs"
          checked={activeTab === 2}
          onChange={() => setActiveTab(2)}
        />
        <label className="tab" htmlFor="radio-2">
          React
        </label>

        <input
          type="radio"
          id="radio-3"
          name="tabs"
          checked={activeTab === 3}
          onChange={() => setActiveTab(3)}
        />
        <label className="tab" htmlFor="radio-3">
          Others
        </label>

        <span
          className="glider"
          style={{ transform: `translateX(${(activeTab - 1) * 100}%)` }}
        ></span>
      </div>
    </div>
  );
};
export default Tabs;
