import React, { useState } from 'react';
import axios from 'axios';

const ActivityGen = ({ addActivity }) => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    try {
      setError(null);
      const fetchRandomTodo = async () => {
        const randomId = Math.floor(Math.random() * 200) + 1;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
        if (!response || !response.data) {
          throw new Error('Failed to fetch activity');
        }
        return response.data;
      };

      const responses = await Promise.all(
        Array.from({ length: 5 }, fetchRandomTodo)
      );

      setActivities(responses.map(response => response.title));
    } catch (err) {
      setError('Failed to fetch activities. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={fetchActivities} className="btn btn-info ms-2 mb-4">Generate Activities</button>
      {error && <div className="error-message">{error}</div>}
      <ul className="list-group mb-4">
        {activities.map((activity, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {activity}
            <button onClick={() => addActivity(activity)} className="btn btn-sm btn-success">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityGen;
