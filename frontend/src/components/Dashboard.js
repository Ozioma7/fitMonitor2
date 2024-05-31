// frontend/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ActivityCard from './ActivityCard';
import runningImg from '../assets/img/run.png';
import swimmingImg from '../assets/img/swim.png';
import cyclingImg from '../assets/img/cycle.png';
import yogaImg from '../assets/img/yoga2.png';
import gymImg from '../assets/img/gym.png';
import skippingImg from '../assets/img/skip.png';

const activities = [
  { id: 1, name: 'Running', image: runningImg },
  { id: 2, name: 'Swimming', image: swimmingImg },
  { id: 3, name: 'Cycling', image: cyclingImg },
  { id: 4, name: 'Yoga', image: yogaImg },
  { id: 5, name: 'Gym', image: gymImg },
  { id: 6, name: 'Skipping', image: skippingImg },
  // Add more activities as needed
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [completedActivities, setCompletedActivities] = useState([]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleActivityToggle = (activityId) => {
    setCompletedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  useEffect(() => {
    // Fetch user's completed activities for the selected year and month from the backend
    // For now, we'll use a placeholder
    setCompletedActivities([1, 3]); // Example: User has completed Running and Cycling
  }, [selectedYear, selectedMonth]);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>Here you can track your fitness activities and monitor your progress.</p>
      <div className="filters">
        <label htmlFor="yearSelect">Select Year: </label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>
              {new Date().getFullYear() - i}
            </option>
          ))}
        </select>
        <label htmlFor="monthSelect">Select Month: </label>
        <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="activities">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            completed={completedActivities.includes(activity.id)}
            onToggle={() => handleActivityToggle(activity.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
