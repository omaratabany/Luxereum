import React from 'react'
import './CO.css'

import { Button } from "@mui/material"
import { TextField } from '@mui/material';



const CO_Home_CreateForm = () => (

    <form className='co_updateform'>
            <div className='createformlabel'>Product Name</div>
            <TextField name={"ProductName"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Product ID</div>
            <TextField name={"ProductID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Manufacturer</div>
            <TextField name={"Manufacturer"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Production Date</div>
            <TextField name={"ProductionDate"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Product Type</div>
            <TextField name={"ProductType"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Holder ID</div>
            <TextField name={"HolderID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Employee Name</div>
            <TextField name={"EmployeeName"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Employee ID</div>
            <TextField name={"EmployeeID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Creation Date</div>
            <TextField name={"CreationDate"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <Button variant="outlined" type='submit' sx={{color: 'white', borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", alignSelf:"flex-start", marginLeft:"20px", marginTop:"30px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Update</Button>

        </form>
)

export default CO_Home_CreateForm;