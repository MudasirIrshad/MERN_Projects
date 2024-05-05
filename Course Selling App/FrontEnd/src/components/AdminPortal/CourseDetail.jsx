import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        flexWrap: "wrap",
      }}
    >
      {course.map((item) => {
        return (
          <Box
            sx={{
              width: "300px",
              bgcolor: "background.paper",
              textAlign: "center",
              padding: "10px",
            }}
            key={item._id}
          >
            <Card>
              <div style={{ lineHeight: ".5" }}>
                <h4>Title: {item.title}</h4>
                <h5>Description: {item.description}</h5>
                <h5>Price: {item.price}</h5>
                <img
                  src={item.image}
                  alt="Course Image"
                  style={{ width: "100vw", height: "200px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "4px",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    style={{ margin: "5px" }}
                  >
                    <Link to={`/courseEdit/${item._id}`}>Edit Course</Link>;
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      let id=item._id
                      axios
                       .delete(
                          `http://localhost:3000/admin/course/${id}`,
                          {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + localStorage.getItem("token"),
                            },
                          }
                        )
                       .then((response) => {
                          alert(response.data.message);
                          window.location.reload();
                        })
                       .catch((error) => {
                          alert(error.message);
                        });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          </Box>
        );
      })}
    </div>
  );
}
