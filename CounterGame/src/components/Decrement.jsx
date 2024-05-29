import React from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Decrement(props) {
  let count = props.count;
  let setCount = props.setCount;
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
