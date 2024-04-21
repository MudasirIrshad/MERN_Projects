import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseDetail() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    
    axios
      .get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setCourse(response.data);
      });
  }, []);
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <table style={{margin:"20px"}}>
  <thead >
    <tr >
      <th >Title</th>
      <th >Description</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {course.map((i, index) => (
      <tr key={index}>
        <td >{i.title}</td>
        <td >{i.description}</td>
        <td>{i.price}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}
