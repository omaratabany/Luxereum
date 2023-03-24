import React, { useState } from 'react'
import './CO.css'

import { Button } from "@mui/material"
import { TextField } from '@mui/material';
import axios from 'axios';



const CO_Home_CreateForm = () => {
  const [ProdName, setName] = useState("");
  const [ProdID, setID] = useState("");
  const [Manu, setManu] = useState("");
  const [ProdDate, setProdDate] = useState("");
  const [ProdType, setProdType] = useState("");
  const [HoldID, setHold] = useState("");
  const [EName, setEName] = useState("");
  const [EID, setEID] = useState("");
  const [CertDate, setCertDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ProdID: ProdID,
      ProdName: ProdName,
      Manu: Manu,
      ProdDate: ProdDate,
      ProdType: ProdType,
      HoldID: HoldID,
      EName: EName,
      EID: EID,
      CertDate: CertDate,
    };
    const url = "http://localhost:3001/certdata.json";
    const jsonData = JSON.stringify(data);
    try {
      const response = await axios.post(url, jsonData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setName("");
        setID("");
        setManu("");
        setProdDate("");
        setProdType("");
        setHold("");
        setEName("");
        setEID("");
        setCertDate("");
        setMessage("Certificate Created Successfully");
      } else {
        setMessage("Error Occurred Try Again Later");
      }
    } catch (err) {
      console.log(err);
      setMessage("Error Occurred Try Again Later");
    }
  };
    return(
      <form className="co_home_createform" onSubmit={CO_Home_CreateForm}>
        <div className="createformlabel">Product Name</div>
        <TextField
          name={"ProdName"}
          value={ProdName}
          onChange={(e) => setName(e.target.value)}
          inputProps={{
            style: { height: "20px" },
          }}
          sx={{
            color: "white",
            width: "300px",
            fontSize: "18px",
            borderColor: "white",
            borderRadius: "6px",
            backgroundColor: "#232323",
            alignSelf: "flex-start",
            marginTop: "30px",
            marginLeft: "20px",
            "& .MuiInputBase-root": { color: "white" },
          }}
        />
        <div className='createformlabel'>Product ID</div>
        <TextField
          name={"ProductID"}
          value={ProdID}
          onChange={(e)=>setID(e.target.value)}
          inputProps={{style: {height: "20px",}, }}
          sx={{
            color:"white",
            width:"300px",
            fontSize:"18px",
            borderColor:"white",
            borderRadius:"6px",
            backgroundColor:"#232323",
            alignSelf:"flex-start",
            marginTop:"30px",
            marginLeft:"20px",
            "& .MuiInputBase-root": {color: 'white'}
          }}
        />

        <div className='createformlabel'>Manufacturer</div>
        <TextField
          name={"Manufacturer"}
          value={Manu}
          onChange={(e)=>setManu(e.target.value)}
          inputProps={{style: {height: "20px",}, }}
          sx={{
            color:"white",
            width:"300px",
            fontSize:"18px",
            borderColor:"white",
            borderRadius:"6px",
            backgroundColor:"#232323",
            alignSelf:"flex-start",
            marginTop:"30px",
            marginLeft:"20px",
            "& .MuiInputBase-root": {color: 'white'}
          }}
        />

        <div className='createformlabel'>Production Date</div>
        <TextField
          name={"ProductionDate"}
          value={ProdDate}
          onChange={(e)=>setProdDate(e.target.value)}
          inputProps={{style: {height: "20px",}, }}
          sx={{color:"white",
            width:"300px",
            fontSize:"18px",
            borderColor:"white",
            borderRadius:"6px",
            backgroundColor:"#232323",
            alignSelf:"flex-start",
            marginTop:"30px",
            marginLeft:"20px",
            "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='createformlabel'>Product Type</div>
        <TextField
          name={"ProductType"}
          value={ProdType}
          onChange={(e)=>setProdType(e.target.value)}
          inputProps={{style: {height: "20px",}, }}
          sx={{
            color:"white",
            width:"300px",
            fontSize:"18px",
            borderColor:"white",
            borderRadius:"6px",
            backgroundColor:"#232323",
            alignSelf:"flex-start",
            marginTop:"30px",
            marginLeft:"20px",
            "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='createformlabel'>Holder ID</div>
        <TextField
          name={"HolderID"}
          value={HoldID}
          onChange={(e)=>setHold(e.target.value)}
          inputProps={{style: {height: "20px",}, }}
          sx={{color:"white",
            width:"300px",
            fontSize:"18px",
            borderColor:"white",
            borderRadius:"6px",
            backgroundColor:"#232323",
            alignSelf:"flex-start",
            marginTop:"30px",
            marginLeft:"20px",
            "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='createformlabel'>Employee Name</div>
        <TextField name={"EmployeeName"}
                   value={EName}
                   onChange={(e)=>setEName(e.target.value)}
                   inputProps={{style: {height: "20px",}, }}
                   sx={{color:"white",
                     width:"300px",
                     fontSize:"18px",
                     borderColor:"white",
                     borderRadius:"6px",
                     backgroundColor:"#232323",
                     alignSelf:"flex-start",
                     marginTop:"30px",
                     marginLeft:"20px",
                     "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='createformlabel'>Employee ID</div>
        <TextField name={"EmployeeID"}
                   value={EID}
                   onChange={(e)=>setEID(e.target.value)}
                   inputProps={{style: {height: "20px",}, }}
                   sx={{color:"white",
                     width:"300px",
                     fontSize:"18px",
                     borderColor:"white",
                     borderRadius:"6px",
                     backgroundColor:"#232323",
                     alignSelf:"flex-start",
                     marginTop:"30px",
                     marginLeft:"20px",
                     "& .MuiInputBase-root": {color: 'white'}}}/>

        <div className='createformlabel'>Creation Date</div>
        <TextField name={"CreationDate"}
                   value={CertDate}
                   onChange={(e)=>setCertDate(e.target.value)}
                   inputProps={{style: {height: "20px",}, }}
                   sx={{color:"white",
                     width:"300px",
                     fontSize:"18px",
                     borderColor:"white",
                     borderRadius:"6px",
                     backgroundColor:"#232323",
                     alignSelf:"flex-start",
                     marginTop:"30px",
                     marginLeft:"20px",
                     "& .MuiInputBase-root": {color: 'white'}}}/>

        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: "#4CAF50",
            },
          }}
        >
          Create Certificate
        </Button>

        {message && <div>{message}</div>}
      </form>
    )
}

export default CO_Home_CreateForm;