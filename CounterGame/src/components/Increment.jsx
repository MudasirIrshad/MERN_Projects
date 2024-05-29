import React from 'react'
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Increment(props) {
    let count = props.count
    let setCount = props.setCount
  return (
    <>
    <Card>
        <Box>
            <Button 
            variant='contained'
            onClick={()=>{
                setCount(count+1)
            }}>
                Increment
            </Button>
        </Box>
    </Card>
    </>
  )
}
