import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              window.location = "/";
            }}
          >
            Home
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            style={{ marginRight: "10px" }}
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
}
