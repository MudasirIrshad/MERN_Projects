import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false); // State to control the display of tasks

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const handleClick = () => {
    // Toggle the state to show/hide tasks
    setShowTasks(!showTasks);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Tasks</button>
      {/* Conditionally render tasks based on showTasks state */}
      {showTasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title}: {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
