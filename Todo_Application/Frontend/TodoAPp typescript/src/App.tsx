import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  _id: string;
  title: string;
  description: string;
}
function App() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [showTasks, setShowTasks] = useState(false); // State to control the display of tasks

  useEffect(() => {
    setInterval(() => {
      axios.get("http://localhost:3000/tasks").then((response) => {
        const data: Todo[] = response.data;
        setTasks(data);
      });
    }, 1000);
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
  let [deleteTasks, setDeleteTasks] = useState(false);
  const toggleDeleteTasks = () => {
    setDeleteTasks(!deleteTasks);
  };
  const [TaskID, setTaskID] = useState("");
  return (
    <div>
      <button onClick={handleClick}>Toggle Tasks</button>
      {/* Conditionally render tasks based on showTasks state */}
      {showTasks && (
        <ul>
          {tasks.map((task) => (
            <ul style={{ listStyle: "none", padding: "0.5rem" }} key={task._id}>
              <li>{task._id}</li>
              <li>{task.title}</li>
              <li>{task.description}</li>
              <li>------------------</li>
            </ul>
          ))}
        </ul>
      )}
      <button onClick={toggleAddTasks}>Add Tasks</button>
      {addTasks && (
        <form style={{ padding: ".5rem" }} action="post">
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
                  setTitle(" ");
                  setDescription(" ");
                })
                .catch((error) => {
                  // Handle error
                  console.error("Error:", error);
                });
              event.preventDefault();
              title.textContent = "";
            }}
          />
        </form>
      )}
      <button onClick={toggleDeleteTasks}>Delete Tasks</button>
      {deleteTasks && (
        <>
          <form style={{ padding: ".5rem" }} action="post">
            <input
              type="text"
              placeholder="Task ID"
              onChange={(e) => {
                setTaskID(e.target.value);
              }}
            />
            <input
              type="submit"
              value="Submit"
              onClick={() => {
                setTaskID(" ");
                axios
                  .delete(
                    `http://localhost:3000/tasks/${TaskID}`,
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
            ></input>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
