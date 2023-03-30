import React from 'react';
import './MKT_Header.css';

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
        <div className='mkttitle'>
            <a href='/' className='mktcompanylogo' style={{textDecoration: "none"}}>
                <img src={logoUrl} className='mktlogo'></img>
                <h1 className='mktname'>Luxereum</h1>
            </a>
        </div> 
        <div className='mktsearchbar'>
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
                width:"800px",
                // marginRight:"30px",
                backgroundColor: "white",
                "& .MuiInputLabel-root": {color: 'black'},
                '& .MuiFilledInput-underline:after': { borderBottomColor: '#d4af37', textcolor: "#d4af37", borderBottomWidth: "4px" },
            }}
            />
        </div>

        <div className='rightmktButtons'>
            <Button component={Link} to="/Market/Account/Favorites" variant="outlined" sx={{color: 'white', marginLeft: "32px", borderColor: "black", backgroundColor:"black", width:"41px", height:"41px", ':hover':{backgroundColor: "black", color:"#d4af37", borderColor:"black"}}}><FavoriteIcon sx={{fontSize:"32px"}} /></Button>
            <Button component={Link} to="/LoginPage" variant="outlined" sx={{color: 'white', marginLeft: "32px", borderColor: "black", backgroundColor:"black", width:"41px", height:"41px", ':hover':{backgroundColor: "black", color:"#d4af37", borderColor:"black"}}}><AccountBoxIcon sx={{fontSize:"32px"}} /></Button>
            <Button component={Link} to="/Market/Cart" variant="outlined" sx={{color: 'white', marginLeft: "32px", borderColor: "black", backgroundColor:"black", width:"41px", height:"41px", ':hover':{backgroundColor: "black", color:"#d4af37", borderColor:"black"}}}><ShoppingCartIcon sx={{fontSize:"32px"}} /></Button>
            
        </div>
    </div>
)

export default MKT_Header;