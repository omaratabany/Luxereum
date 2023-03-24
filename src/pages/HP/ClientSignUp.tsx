import React from 'react'
import './HomePage.scss'
import CL_SignUp from '../../components/CL/CL_SignUp';
import BackGroundVideo from '../../components/HP/BackGroundVideo';
import logoUrl from '../../assets/Images/logo-1@2x.png';

function ClientSignUp() {
    return (
        <div className='loginpage'>
            <div className="centerHeader" >
                <a href='/' className='loginpagehomelink'>
                    <img src={logoUrl} className="logoimg" alt='luxereumimg' />
                    <h1 className="companyName">Luxereum</h1>
                </a>
            </div>
            <div className='backgroundvideo'>
                <BackGroundVideo/>
            </div>

            <div className='signupcontainer'>
                <CL_SignUp />
                
            </div>
        </div>
    )
}

export default ClientSignUp;