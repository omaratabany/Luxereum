import React from 'react';
import './CO.css';


import logoUrl from '../../assets/Images/logo-1@2x.png';

import homepic from '../../assets/Images/house-1@2x.png'
import createpic from '../../assets/Images/create-1@2x.png'
import transferpic from '../../assets/Images/data-transfer-1@2x.png'
import revokepic from '../../assets/Images/cancel-1@2x.png'
import logspic from '../../assets/Images/log-1@2x.png'

const CO_Sidebar = () => (
    <div className='co_sidebar'>
        <a href='/' className='company' style={{textDecoration: "none"}}>
            <img src={logoUrl} className='companylogo'></img>
            <h1 className='companyname'>Luxereum</h1>
        </a>
        <div className='sidebarlist'>
            <div className='sidebarbutton'>
                <a href="/CorporateHome" style={{textDecoration: "none"}}><img src={homepic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/CorporateHome" style={{textDecoration: "none", color: "white"}}>Home</a></h1>
            </div>
            <div className='sidebarbutton'>
                <a href="/CorporateCreate" style={{textDecoration: "none"}}><img src={createpic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/CorporateCreate" style={{textDecoration: "none", color: "white"}}>Create</a></h1>
            </div>
            <div className='sidebarbutton'>
                <a href="/CorporateTransfer" style={{textDecoration: "none"}}><img src={transferpic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/CorporateTransfer" style={{textDecoration: "none", color: "white"}}>Transfer</a></h1>
            </div>
            <div className='sidebarbutton'>
                <a href="/CorporateRevoke" style={{textDecoration: "none"}}><img src={revokepic} style={{width: "50px", paddingRight: "10px"}}/></a>
                <h1 className='category'><a href="/CorporateRevoke" style={{textDecoration: "none", color: "white"}}>Revoke</a></h1>
            </div>

        </div>
    </div>
)

export default CO_Sidebar;