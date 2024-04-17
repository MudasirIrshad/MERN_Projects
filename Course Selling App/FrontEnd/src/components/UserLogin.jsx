import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function UserLogin() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            backgroundColor: "Red",
            color: "White",
            padding: "1px",
            borderRadius: "10px",
          }}
        >
          <Typography>My logo</Typography>
        </div>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          style={{ backgroundColor: "LightBlue" }}
        >
          <Button
            onClick={(e) => {
              window.location = "signup";
              e.preventDefault()
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
            SignIn
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default UserLogin;
