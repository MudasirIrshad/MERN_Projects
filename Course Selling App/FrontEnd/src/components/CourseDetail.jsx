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
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <ul>
        {
            course.map((c)=>{

            })
        }
      </ul>
    </>
  );
}
