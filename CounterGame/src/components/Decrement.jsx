import React, { useContext } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { CountContext } from "../Context";
export default function Decrement() {
  let { count, setCount } = useContext(CountContext);
  return (
    <>
      <Card>
        <Box>
          <Button
            onClick={() => {
              setCount(count - 1);
            }}
            variant="contained"
            color="error"
          >
            Decrement
          </Button>
        </Box>
      </Card>
    </>
  );
}
