import React from 'react';
import './CO.css';

import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


const CO_Header = () => (
    <div className='co_header'>
        <div className='usergreeting'>
            <PersonIcon className='personicon' sx={{fontSize: "66px"}}/>
            <h1 className='greetingmessage'>Hello, Username</h1>
        </div> 
        <div className='searchbarcontainer'>
            <TextField
            id="filled-search"
            label="Search"
            type="search"
            variant="filled"
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            sx={{
                width:"70%",
                marginRight:"30px",
                backgroundColor: "white",
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "#d4af37", borderBottomWidth: "4px" },
            }}
            />
        </div>
    </div>
)

export default CO_Header;