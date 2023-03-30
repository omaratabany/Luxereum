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

import productImg from '../../assets/Images/image-1@2x.png'



const MKT_ProductCard = () => (
    <a href='/Market/Product' style={{textDecoration: 'none'}}>
        <div className='mkt_productcard'>
            <div className='mkt_productcard_productpicturecontainer'>
                <img src={productImg} className='mkt_productcard_productpicturecontainer_picture'/>
            </div>

            <div className='mkt_productcard_producttextcontainer'>
                <text className='mkt_productcard_producttextcontainer_text'>Item Name</text>
                <text className='mkt_productcard_producttextcontainer_text'>Item ID</text>
                <text className='mkt_productcard_producttextcontainer_text'>Item Brand</text>
                <text className='mkt_productcard_producttextcontainer_text'>Item Price</text>
            </div>
        </div>
    </a>
    
)

export default MKT_ProductCard;