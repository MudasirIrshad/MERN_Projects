import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
export default function SignUn() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
      <Box sx={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          style={{ width: "300px", textAlign: "center", padding: "10px" }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            style={{ paddingBottom: "10px" }}
          />
          <TextField
            id="standard-basic"
            label="Gmail"
            variant="standard"
            style={{ paddingBottom: "10px" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            style={{ paddingBottom: "10px" }}
          />
          <br />
          <Button variant="contained">Sign Up</Button>
        </Card>
      </Box>
    </div>
  );
}
