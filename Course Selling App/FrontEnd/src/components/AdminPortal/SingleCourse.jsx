import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Box, Button, TextField } from "@mui/material";
export default function SingleCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
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
          label="Price"
          variant="standard"
          style={{ paddingBottom: "10px" }}
          onChange={(e) => {
            setPrice(e.target.value);
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
          label="Image-Link"
          variant="standard"
          style={{ paddingBottom: "10px" }}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            console.log(id);
            axios.put(
              `http://localhost:3000/admin/editCourse/${id}`,
              {
                title: title,
                description: description,
                price: price,
                image: image,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + localStorage.getItem("token"),
                },
              }
            )
            .then((response) => {
              console.log(response.data);
              alert("Course Updated");
            })
            .catch((error) => {
              console.error(error);
            });
            
          }}
        >
          Update
        </Button>
      </Card>
    </div>
  );
}
