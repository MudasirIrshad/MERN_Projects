import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tasks", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setTasks(data);
      });
    });
  }, []);
  return (
    <>
      <p>{tasks.map((i)=>{
        return <><li key={i._id}>{i.title+": "+i.description}</li><button style={{background:"white", color:"black"}}>delete</button><br /> </>

      })}</p>
    </>
  );
}
export default App;
