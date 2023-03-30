import React from 'react'
import './CL.css'

import { Button } from "@mui/material"
import { TextField } from '@mui/material';



const CL_Transfer = () => (
    <div className='cl_updateform'>
        <div className='updateformlabel'>Certificate ID</div>
        <TextField inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='updateformlabel'>Recipient ID</div>
        <TextField inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

        <Button variant="outlined" sx={{color: 'white', borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", alignSelf:"flex-start", marginLeft:"20px", marginTop:"30px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Send</Button>

    </div>
)

export default CL_Transfer;