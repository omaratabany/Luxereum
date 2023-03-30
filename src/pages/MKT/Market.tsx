import React from 'react'
import { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";

import './Market.scss'

import PropTypes from 'prop-types';
import MKT_Header from '../../components/MKT/MKT_Header.js';
import { styled } from '@mui/material/styles';
import MKT_ProductCard from '../../components/MKT/MKT_ProductCard';
import watchBanner from '../../assets/Images/qq--20230301222807-1.png'
import bagsBanner from '../../assets/Images/image-10.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import MKT_Categories from '../../components/MKT/MKT_Categories';

import watchesbanner from '../../assets/Images/qq--20230301222807-1.png'
import bagsbanner from '../../assets/Images/image-10.png'
import shoesbanner from '../../assets/Images/luxury-shoes-mainimage-pep-1565252463.jpg'
import MKT_Footer from '../../components/MKT/MKT_Footer';




function Market() {
    const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });

    const ref1 =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events:events1 } = useDraggable(ref1, {
        applyRubberBandEffect: true,
    });
    
    
    const ref2 =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events:events2 } = useDraggable(ref2, {
        applyRubberBandEffect: true,
    });
    
    const ref3 =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events:events3 } = useDraggable(ref3, {
        applyRubberBandEffect: true,
    });
    
    const ref4 =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events:events4 } = useDraggable(ref4, {
        applyRubberBandEffect: true,
    });
    
    

    return (
        
        <div className='market'>
            <MKT_Header />
            <MKT_Categories />

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

            <img src={watchesbanner} className='marketbanner'/>

            <div className='featuredproducts'>
                <div className='featuredproducts_title'>
                    <text className='featuredproducts_title_text'>Featured Watches</text>
                </div>
                <div className='featuredproducts_productcard' {...events1} ref={ref1}>
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <Button />
                </div>
            </div>

            
            <img src={bagsbanner} className='marketbanner'/>

            <div className='featuredproducts'>
                <div className='featuredproducts_title'>
                    <text className='featuredproducts_title_text'>Featured Bags</text>
                </div>
                <div className='featuredproducts_productcard' {...events2} ref={ref2}>
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    
                </div>
            </div>

            
            <img src={shoesbanner} className='marketbanner'/>

            <div className='featuredproducts'>
                <div className='featuredproducts_title'>
                    <text className='featuredproducts_title_text'>Featured Shoes</text>
                </div>
                <div className='featuredproducts_productcard' {...events3} ref={ref3}>
                    <MKT_ProductCard />
                    <MKT_ProductCard />
                    
                </div>
            </div>


            <div className='featuredproducts'>
                <div className='featuredproducts_title'>
                    <text className='featuredproducts_title_text'>Newly Listed</text>
                </div>
            <div className='featuredproducts_productcard' {...events4} ref={ref4}>
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

export default Market;