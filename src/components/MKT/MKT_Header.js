import React from 'react';
import './MKT.css';

import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import logoUrl from '../../assets/Images/logo-1@2x.png';




const MKT_Header = () => (
    <div className='mkt_header'>
        <a href='/' style={{textDecoration: 'none'}}>
            <img src={logoUrl} className='mkt_header_logopicture'/>
        </a>
        <a href='/' style={{textDecoration: 'none'}} className='mkt_header_logoname'>
            <div>Luxereum</div>
        </a>

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
                width:"100%",
               
                marginLeft:"16px",
                marginRight:"32px",
                backgroundColor: "white",
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "#d4af37", borderBottomWidth: "4px" },
            }}

            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    window.location.replace("http://localhost:3000/Search");
                }
              }}
        />

        <a href='/Market/Browse' style={{textDecoration: 'none'}} className='mkt_header_link'>
            <div>
                Browse
            </div>
        </a>

        <a href='/ClientListings' style={{textDecoration: 'none'}} className='mkt_header_link'>
            <div>
                Sell
            </div>
        </a>

        <a href='/Market/Wishlist' style={{textDecoration: 'none'}} className='mkt_header_link'>
            <div>
                Wishlist
            </div>
        </a>

        <a href='/ClientHome' style={{textDecoration: 'none'}} className='mkt_header_link'>
            <div>
                Account
            </div>
        </a>
        

        
    </div>
)

export default MKT_Header;