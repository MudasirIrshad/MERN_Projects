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
  let [addTasks, setAddTasks] = useState(false);
  const toggleAddTasks = () => {
    setAddTasks(!addTasks);
  };
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
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
      <button onClick={toggleAddTasks}>Add Tasks</button>
      {addTasks && (
        <form action="post">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              axios
                .post(
                  "http://localhost:3000/tasks",
                  { title, description }, // Data to be sent in the body
                  { headers: { "Content-Type": "application/json" } } // Headers
                )
                .then((response) => {
                  // Handle response
                  console.log("Response:", response);
                })
                .catch((error) => {
                  // Handle error
                  console.error("Error:", error);
                });
              event.preventDefault();
            }}
          />
        </form>
      )}
    </div>
  );
}

export default App;
