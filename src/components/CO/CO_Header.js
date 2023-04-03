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
        <a href='/LoginPage' className='logoutbutton'>
          <h1>
            Logout
          </h1>
        </a>
      </div>
    </div>
)

export default CO_Header;