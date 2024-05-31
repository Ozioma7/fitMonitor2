// frontend/src/components/ActivityCard.js
import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity, completed, onToggle }) => {
  return (
    <div className={`activity-card ${completed ? 'completed' : ''}`} onClick={onToggle}>
      <img src={activity.image} alt={activity.name} />
      <h3>{activity.name}</h3>
      <div className="checkbox-container">
        <input type="checkbox" checked={completed} readOnly />
        <label>{completed ? 'Completed' : 'Not Completed'}</label>
      </div>
    </div>
  );
};

export default ActivityCard;
