import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../components/UserContext';
import './Dashboard.css';
import ActivityCard from './ActivityCard';

import runImage from '../assets/img/run.png';
import swimImage from '../assets/img/swim.png';
import cycleImage from '../assets/img/cycle.png';
import yogaImage from '../assets/img/yoga.png';
import gymImage from '../assets/img/gym.png';
import skipImage from '../assets/img/skip.png';

const activities = [
  { id: 1, name: 'Running', image: runImage },
  { id: 2, name: 'Swimming', image: swimImage },
  { id: 3, name: 'Cycling', image: cycleImage },
  { id: 4, name: 'Yoga', image: yogaImage },
  { id: 5, name: 'Gym', image: gymImage },
  { id: 6, name: 'Skipping', image: skipImage },
  // Add more activities as needed
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Dashboard = () => {
  const { user } = useContext(UserContext);
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
      <h1>Welcome {user ? user.name : 'Guest'}</h1>
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
