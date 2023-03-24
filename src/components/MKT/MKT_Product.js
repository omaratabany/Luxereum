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



const MKT_Product = () => (
    <div className='mkt_product'>
        <div className='mkt_product_imagecontainer'>
            <img src={productImg} className='mkt_product_imagecontainer_image' />
        </div>
        
        <div className='mkt_product_container'>
            <div className='mkt_product_container_namecontainer'>
                <text className='mkt_product_container_namecontainer_text'> Product Name</text>
            </div>

            <div className='mkt_product_container_descriptioncontainer'>
                <text className='mkt_product_container_descriptioncontainer_text'>ID: 1232</text>
                <text className='mkt_product_container_descriptioncontainer_text'>Brand: Stuff</text>
                <text className='mkt_product_container_descriptioncontainer_text'>Condition: Battle-Scarred</text>
                <text className='mkt_product_container_descriptioncontainer_text'>Last Purchased For: $3.50</text>
                <text className='mkt_product_container_descriptioncontainer_text'>Original Sale Date: 01/01/1991</text>
            </div>

            <div className='mkt_product_buttonscontainer'>
                <Button variant="contained" sx={{textAlign:'center', backgroundColor:'#038000', color:'#ffffff', height:'70px', alignSelf:'center', fontWeight:'700', fontStyle:'normal', fontSize:'24px', width:'100%', margin:'8px', ':hover':{backgroundColor:"#025900"}}}>Purchase for $3,000,000.01</Button>
                <Button variant="outlined" sx={{textAlign:'center', backgroundColor:'#ffffff', color:'#000000', height:'50px', alignSelf:'center', fontWeight:'300', fontStyle:'normal', fontSize:'24px', padding:'8px', width:'100%', borderColor:'black', ':hover':{borderColor:"black", backgroundColor:"#D9D9D9"}}}>Add to Wishlist</Button>
            </div>
        </div>
    </div>
)

export default MKT_Product;