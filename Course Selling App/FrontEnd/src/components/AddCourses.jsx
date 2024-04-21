import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export default function AddCourses() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
      <Box sx={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          style={{ width: "300px", textAlign: "center", padding: "10px" }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              axios
                .post(
                  "http://localhost:3000/admin/courses",
                  {
                    title: title,
                    description: description,
                    price: price,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                )
                .then((response) => {
                  console.log(response.data);
                  alert("success");
                })
                .catch((error) => {
                  alert(error.message);
                });
            }}
          >
            Add Course
          </Button>
        </Card>
      </Box>
    </div>
  );
}
