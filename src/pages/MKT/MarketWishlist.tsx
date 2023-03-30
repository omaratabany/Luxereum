import React from 'react'
import './Market.scss'
import MKT_Header from '../../components/MKT/MKT_Header.js';
import { styled } from '@mui/material/styles';
import MKT_ProductCard from '../../components/MKT/MKT_ProductCard';
import watchBanner from '../../assets/Images/qq--20230301222807-1.png'
import bagsBanner from '../../assets/Images/image-10.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import MKT_Categories from '../../components/MKT/MKT_Categories';
import MKT_Footer from '../../components/MKT/MKT_Footer';
import MKT_Wishlist from '../../components/MKT/MKT_Wishlist';




function MarketWishlist() {
    return (
        <div className='marketbags'>
            <MKT_Header />
            <MKT_Categories />

            <div className='featuredproducts_title'>
                <text className='featuredproducts_title_text'>All Products</text>
            </div>
            <div className='marketproductcardgrid' >
                <MKT_Wishlist />
                <MKT_Wishlist />
                <MKT_Wishlist />
                <MKT_Wishlist />
                <MKT_Wishlist />
                <MKT_Wishlist />
                <MKT_Wishlist />
            </div>
            
            <MKT_Footer />
        </div>
       
    );
}

export default MarketWishlist;