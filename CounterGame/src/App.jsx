import React from "react";
import { useState } from "react";
import Increment from "./components/Increment";
import { Card } from "@mui/material";
import Decrement from "./components/Decrement";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card style={{ padding: "20px", textAlign:"center"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          <Increment count={count} setCount={setCount} />
          <Decrement count={count} setCount={setCount} />
        </div>
        <h1>{count}</h1>
      </Card>
      </div>
  );
}
