import React from 'react'
import './HomePage.scss'
import CL_LoginForm from '../../components/CL/CL_LoginForm';
import CO_LoginForm from '../../components/CO/CO_LoginForm';
import BackGroundVideo from '../../components/HP/BackGroundVideo';
import logoUrl from '../../assets/Images/logo-1@2x.png';

function LoginPage() {
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
                <CL_LoginForm />
                
            </div>
        </div>
    )
}

export default LoginPage;