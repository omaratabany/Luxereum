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



const MKT_Wishlist = () => (
    <div className='mkt_wishlist'>
        <div className='mkt_wishlist_productpicturecontainer'>
            <img src={productImg} className='mkt_productcard_productpicturecontainer_picture'/>
        </div>
        <div className='mkt_wishlist_producttextcontainer'>
            <text className='mkt_wishlist_producttextcontainer_text'>Item Name</text>
            <text className='mkt_wishlist_producttextcontainer_text'>Item ID</text>
            <text className='mkt_wishlist_producttextcontainer_text'>Item Brand</text>
            <text className='mkt_wishlist_producttextcontainer_text'>Item Price</text>
        </div>
        <Button variant="contained" sx={{textAlign:'center', backgroundColor:'#038000', color:'#ffffff', height:'30px', alignSelf:'center', fontWeight:'700', fontStyle:'normal', fontSize:'16px', width:'90%', margin:'8px', ':hover':{backgroundColor:"#025900"}}}>View</Button>
        <Button variant="outlined" sx={{textAlign:'center', backgroundColor:'#ffffff', color:'#000000', height:'30px', alignSelf:'center', fontWeight:'300', fontStyle:'normal', fontSize:'12px', padding:'8px', width:'90%', borderColor:'black', ':hover':{borderColor:"black", backgroundColor:"#D9D9D9"}}}>Remove from Wishlist</Button>
    </div>
)

export default MKT_Wishlist;