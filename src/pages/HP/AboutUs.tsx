import React from 'react'
import './HomePage.scss'
import CL_SignUp from '../../components/CL/CL_SignUp';
import BackGroundVideo from '../../components/HP/BackGroundVideo';
import logoUrl from '../../assets/Images/logo-1@2x.png';
import HP_Header from '../../components/HP/HP_Header';
import MKT_Footer from '../../components/MKT/MKT_Footer';

function AboutUs() {
    return (
        <div className='aboutus'>
            <div className='hp_header'>
                <HP_Header/>
            </div>
            
            <div className='backgroundvideo'>
                <BackGroundVideo/>
            </div>

            <div className='aboutuscontentcontainer'>
                <div className='aboutuscontent'>
                    <text className='aboutusheader'>
                        About Us
                    </text>
                    <text>
                        Luxereum is a capstone project for the course CSIT321 by group Deimos. <br /><br />

                        The purpose of this project is to explore the use of blockchain technology in the certification of the authenticity of real-life luxury products, this project makes use of the Ethereum network. <br /><br />
                        
                        The project offers users 
                        the ability to view the certificates they own, and are given the platform to buy and sell certificates with Luxereum acting as the middleman. 
                        This is done to ensure that the correct products are being shipped from one user to another and to protect the buyer from potentially losing their 
                        purchase.
                    </text>
                    
                </div>
            </div>
            

            <div>
                <MKT_Footer />
            </div>
        </div>
    )
}

export default AboutUs;