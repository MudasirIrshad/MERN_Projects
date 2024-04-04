import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/tasks", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTasks(JSON.stringify(data));
      });
    });
  }, []);
  return (
    <>
      <p>{tasks}</p>
    </>
  );
}
export default App;
