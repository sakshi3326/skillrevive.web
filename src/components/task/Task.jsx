import React, { useEffect, useState } from 'react'; // Importing React and hooks only once
import './task.css'; // Correct file name for CSS
import tasksData from './tasksdata.json'; // Correct file name for JSON and consistent variable naming

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    setTasks(tasksData);
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div className="task-container">
      {tasks.map(task => (
        <div key={task.id} className="task-box">
          <h2>{task.title}</h2>
          <p>{task.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Task;
