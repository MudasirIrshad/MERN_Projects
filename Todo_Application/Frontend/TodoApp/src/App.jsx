import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const response = axios.get("http://localhost:3000/tasks").then((response) => {
    setTasks(response.data)
    })
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
