// frontend/src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data } = await getActivities();
        setActivities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity._id}>{activity.name} - {activity.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
