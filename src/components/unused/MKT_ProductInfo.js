import React from 'react'
import { styled } from '@mui/material/styles';
import './MKT_ProductInfo.css'

const Img = styled('img')({
    display: 'block',
    maxWidth: '500px',
    maxHeight: 'auto',
});

const MKT_ProductInfo = () => (
    <div className='mkt_productinfo'>
        <div className = "mktproductimage">
            <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png"/>
        </div>
        <div className='mkt_productname'>
            <h1 className='mktproductname'>
                Product Name
            </h1>

            <div className='mktproductdetails'>
                <p className='mktinfolabel'>Product ID:</p>
                
                <p>
                    aaa
                </p>
            </div>

            <div className='mktproductdetails'>
                <p className='mktinfolabel'>Product brand:</p>
                <p>
                    aaaaaa
                </p>
            </div>

            <div className='mktproductdetails'>
                <p className='mktinfolabel'>Product price:</p>
                
                <p>
                    121
                </p>
            </div>
            
        </div>
        
    </div>
)

export default MKT_ProductInfo;