import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
function UserLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName]=useState("")
  useEffect(() => {
    setInterval(() =>{
      axios
      .get("http://localhost:3000/admin/detail", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.gmail) {
          setIsLoggedIn(true);
          setUserName(res.data.name)
          
        }
      });
    },1000)
    
  }, []);
  if(isLoggedIn) {
    return (
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Button variant="contained" style={{backgroundColor:"Red"}}>Logo</Button>
        <ButtonGroup>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
              window.location="/signin"
            }}
          >
            Logout
          </Button>
          
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              window.location = "/addCourses";
            }}
          >
            Add Course
          </Button>
        </ButtonGroup>
      </div>
    );
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" style={{backgroundColor:"Red"}}>Logo</Button>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          style={{ backgroundColor: "LightBlue" }}
        >
          <Button
            onClick={(e) => {
              window.location = "signup";
              e.preventDefault();
            }}
          >
            SignUp
          </Button>
          <Button
            onClick={(e) => {
              window.location = "/signin";
              e.preventDefault();
            }}
          >
            Login
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default UserLogin;
