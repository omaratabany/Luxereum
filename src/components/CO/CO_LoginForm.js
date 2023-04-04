import React from 'react'
import './CO.css'

import { TextField } from '@mui/material'
import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const CO_LoginForm = () => (
    <div className='cologincard'>
        <h1 className='loginheading'>Corporate Login</h1>
        <form method='submit' className='cologinform'>
            <TextField
            id="outlined-username-input"
            label="Username"
            type="username"
            required
            autoComplete="current-username"
            variant="filled"
            className='usernameinput'
            sx={{
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: 'black', textcolor: "black" },
            }}

            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            variant="filled"
            className='passwordinput'
            sx={{
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: 'black', textcolor: "black" }
            }}
            />
            <Button
            component={Link} to="/CorporateHome" 
            variant="outlined" 
            type='submit'
            sx={{
                color: 'white',  
                marginTop: "24px",
                borderColor: "#333333", 
                backgroundColor:"#333333", 
                alignSelf:"center",
                width:"75%", 
                height:"62.5px", 
                ':hover':{
                    backgroundColor: "black", 
                    color:"white", 
                    borderColor:"black"
                }
            }}
            >Login</Button>

            
        </form>
    
    
    </div>
)

export default CO_LoginForm