import React from 'react'
import './CL.css'

import { TextField } from '@mui/material'
import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const CL_SignUp = () => (
    <div className='cologincard'>
        <h1 className='signupheading'>Create Account</h1>
        <form method='submit' className='clsignup'>
            <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            required
            autoComplete="current-email"
            variant="filled"
            className='emailinput'
            sx={{
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "black" },
            }}
            />
            
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
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "black" },
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
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "black" },
            }}
            />
            <TextField
            id="outlined-password-input"
            label="Retype Password"
            type="password"
            autoComplete="current-password"
            required
            variant="filled"
            className='passwordinput'
            sx={{
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "black" }
            }}
            />
            
            <Button
            component={Link} to="/LoginPage" 
            variant="outlined" 
            type='submit'
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
                    borderColor: "#333333",
                    backgroundColor: "#333333",
                }
            }}
            >Create Account</Button>
            
        </form>

            
    
    </div>
)

export default CL_SignUp;