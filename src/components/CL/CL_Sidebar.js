import React from 'react';
import './CL.css';


import logoUrl from '../../assets/Images/logo-1@2x.png';

import homepic from '../../assets/Images/house-1@2x.png'
import transferpic from '../../assets/Images/data-transfer-1@2x.png'
import logspic from '../../assets/Images/log-1@2x.png'

const CL_Sidebar = () => (
    <div className='co_sidebar'>
        <a href='/' className='company' style={{textDecoration: "none"}}>
            <img src={logoUrl} className='companylogo'></img>
            <h1 className='companyname'>Luxereum</h1>
        </a>
        <div className='sidebarlist'>
            <div className='sidebarbutton'>
                <a href="/ClientHome" style={{textDecoration: "none"}}><img src={homepic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/ClientHome" style={{textDecoration: "none", color: "white"}}>Home</a></h1>
            </div>
            <div className='sidebarbutton'>
                <a href="/ClientListings" style={{textDecoration: "none"}}><img src={transferpic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/ClientListings" style={{textDecoration: "none", color: "white"}}>Sell</a></h1>
            </div>
            <div className='sidebarbutton'>
                <a href="/ClientTransfer" style={{textDecoration: "none"}}><img src={transferpic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/ClientTransfer" style={{textDecoration: "none", color: "white"}}>Transfer</a></h1>
            </div>

            
        </div>
    </div>
)

export default CL_Sidebar;