import React, { useContext } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { CountContext } from "../Context";
import { useSetRecoilState } from "recoil";
import { countState } from "../Atoms";
export default function Decrement() {
  const setCount = useSetRecoilState(countState);
  return (
    <>
      <Card>
        <Box>
          <Button
            onClick={() => {
              setCount((x) => x - 1);
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
