import React, { useRef } from 'react'
import './Market.scss'
import MKT_Header from '../../components/MKT/MKT_Header.js';
import { styled } from '@mui/material/styles';
import MKT_ProductCard from '../../components/MKT/MKT_ProductCard';
import watchBanner from '../../assets/Images/qq--20230301222807-1.png'
import bagsBanner from '../../assets/Images/image-10.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import MKT_Product from '../../components/MKT/MKT_Product';
import MKT_Footer from '../../components/MKT/MKT_Footer';
import { useDraggable } from 'react-use-draggable-scroll';
import MKT_Categories from '../../components/MKT/MKT_Categories';




function MarketProduct() {
    const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });
    
    return (
        <div className='marketproduct'>
            <MKT_Header />
            <MKT_Categories />
            <div className='marketproduct_mktproduct'>
                <MKT_Product />
            </div>
            
            
            <div className='featuredproducts'>
                <div className='featuredproducts_title'>
                    <text className='featuredproducts_title_text'>Featured Products</text>
                </div>
                <div className='featuredproducts_productcard' {...events} ref={ref} >
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                </div>
            </div>
            <MKT_Footer />
        </div>
       
    );
}

export default MarketProduct;