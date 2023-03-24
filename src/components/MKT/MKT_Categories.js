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




const MKT_Categories = () => (
    <div className='mkt_categories'>
        <a href='/Market/Watches' style={{textDecoration: 'none'}} className='mkt_categories_link'>
            <div>
                Watches
            </div>
        </a>

        <a href='/Market/Bags' style={{textDecoration: 'none'}} className='mkt_categories_link'>
            <div>
                Bags
            </div>
        </a>

        <a href='/Market/Shoes' style={{textDecoration: 'none'}} className='mkt_categories_link'>
            <div>
                Shoes
            </div>
        </a>
    </div>
)

export default MKT_Categories;