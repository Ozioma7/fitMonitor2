import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

const UserActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust this according to your auth logic
        const response = await getActivities(token);
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>User Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity._id}>{activity.name}: {activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
