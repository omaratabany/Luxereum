import React from 'react'
import './CL.css'

import { TextField } from '@mui/material'
import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const CL_LoginForm = () => (
    <div className='cllogincard'>
        <h1 className='loginheading'>Client Login</h1>
        <form method='post' className='clloginform'>
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
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "#d4af37" },
            }}

            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            required
            autoComplete="current-password"
            variant="filled"
            className='passwordinput'
            sx={{
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "#d4af37" }
            }}
            />
            <Button
            component={Link} to="/ClientHome" 
            variant="outlined" 
            type='submit'
            sx={{
                color: 'white',  
                marginTop: "24px",
                borderColor: "#D4AF37", 
                backgroundColor:"#D4AF37", 
                alignSelf:"center",
                width:"75%", 
                height:"62.5px", 
                ':hover':{
                    backgroundColor: "#987c24", 
                    color:"white", 
                    borderColor:"#987c24"
                }
            }}
            >Login</Button>
        </form>
        

        <a href="/AccountRecovery" className='forgotpassword'> I forgot my password.</a>  

        <Button
         component={Link} to="/ClientSignUp" 
         variant="outlined" 
         sx={{
            color: 'black', 
            width: "75%",
            height: "62.5px",
            alignSelf: "center",
            marginTop: "24px",
            textAlign: "center",
            borderWidth: "1px",
            backgroundColor: "#ffffff",
            borderColor: "black",

            ':hover':{
                color: "white",
                borderColor: "#d4af37",
                backgroundColor: "#d4af37",
            }
         }}
        >Register</Button>
    
    </div>
)

export default CL_LoginForm