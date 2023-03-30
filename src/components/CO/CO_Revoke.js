import React from 'react'
import './CO.css'

import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import CO_CertCard from './CO_CertCard';



const CO_Revoke = () => (
    <div className='co_revoke'>
        <div className='leftcontainer'>
            <div className='revokelabel'>Search Certificate ID</div>
            <TextField inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>
            <Button variant="outlined" sx={{color: 'white', borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", alignSelf:"flex-start", marginLeft:"20px", marginTop:"30px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Search</Button>
        </div>

        <div className='rightcontainer'>
            <CO_CertCard />
            <div className='revokelabel'>Notes</div>
            <TextField multiline inputProps={{style: {height: "250px",}, }}sx={{color:"white", width:"95%", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>
            <Button variant="outlined" sx={{color: 'white', borderColor: "red", backgroundColor:"gray", width:"130px", height:"41px", alignSelf:"flex-start", marginLeft:"20px", marginTop:"30px", ':hover':{backgroundColor: "red", color:"white", borderColor:"red"}}}>Revoke</Button>
        </div>
    </div>
)

export default CO_Revoke;