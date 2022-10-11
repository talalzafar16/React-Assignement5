import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Learn.css";

export default function Home() {

  return (
    <>
    <Box>
      <div className="bd">
        <div className="content"><Typography sx={{fontFamily:"'Times New Roman', Times, serif", fontWeight:"bold",fontSize:"62px"}}  variant="h3">You Are At Best Place To Learn</Typography>
        <Typography sx={{fontFamily:"'Times New Roman', Times, serif",fontSize:"42px"}} variant="h3">Join Our Family</Typography>
        <Typography sx={{fontFamily:"'Times New Roman', Times, serif",fontWeight:"bold",marginTop:"42px",fontSize:"62px"}} variant="h3">Just One click Away</Typography>
        <Button size="large" sx={{fontFamily:"'Times New Roman', Times, serif",marginTop:"36px",fontSize:"32px",height:"102px",width:"284px"}} variant="contained">Create Account</Button>
        </div>
        </div>
    </Box></>
  )
}
