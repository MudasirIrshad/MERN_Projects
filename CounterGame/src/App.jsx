import React from "react";
import Increment from "./components/Increment";
import { Card } from "@mui/material";
import Decrement from "./components/Decrement";
import Count from "./components/Count";

export default function App() {
  return (
    <div>
      <Card style={{ padding: "20px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          <Increment />
          <Decrement />
        </div>
        <Count />
      </Card>
    </div>
  );
}
