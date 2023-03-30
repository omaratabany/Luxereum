import React from 'react'

import './CL.css'


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import productImg from '../../assets/Images/image-1@2x.png'


const CL_ListedCertificates = () => (
                
    <div className='cl_productcard'>
        <div className='cl_productcard_productpicturecontainer'>
            <img src={productImg} className='cl_productcard_productpicturecontainer_picture'/>
        </div>

        <div className='cl_productcard_producttextcontainer'>
            <text className='cl_productcard_producttextcontainer_text'>Item Name</text>
            <text className='cl_productcard_producttextcontainer_text'>Item ID</text>
            <text className='cl_productcard_producttextcontainer_text'>Item Brand</text>
            <text className='cl_productcard_producttextcontainer_text'>Item Price</text>
        </div>
    </div>
)

export default CL_ListedCertificates;