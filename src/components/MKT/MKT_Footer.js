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




const MKT_Footer = () => (
    <div className='mkt_footer'>
        <div className='mkt_footer_about'>
            <text className='mkt_footer_about_title'>About</text>

            <text className='mkt_footer_about_text'>
                qwerty
            </text>
        </div>

        <div className='mkt_footer_categories'>
            <text className='mkt_footer_categories_title'>Categories</text>
            
            <a href='/Market/Watches' style={{textDecoration: 'none'}} className='mkt_footer_categories_link'>Watches</a>

            <a href='/Market/Bags' style={{textDecoration: 'none'}} className='mkt_footer_categories_link'>Bags</a>

            <a href='/Market/Shoes' style={{textDecoration: 'none'}} className='mkt_footer_categories_link'>Shoes</a>
        </div>

        <div className='mkt_footer_information'>
            <text className='mkt_footer_information_title'>Information</text>

            <a href='/TermsAndConditions' style={{textDecoration: 'none'}} className='mkt_footer_information_link'>Terms & Contitions</a>

            <a href='/PrivacyPolicy' style={{textDecoration: 'none'}} className='mkt_footer_information_link'>Privacy Policy</a>
        </div>

        <div className='mkt_footer_contactus'>
            <text className='mkt_footer_contactus_title'>Contact Us</text>

            <text className='mkt_footer_contactus_text'>050 123 4567</text>
        </div>
    </div>
)

export default MKT_Footer;