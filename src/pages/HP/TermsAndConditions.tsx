import React from 'react'
import './HomePage.scss'
import CL_SignUp from '../../components/CL/CL_SignUp';
import BackGroundVideo from '../../components/HP/BackGroundVideo';
import logoUrl from '../../assets/Images/logo-1@2x.png';
import MKT_Footer from '../../components/MKT/MKT_Footer';
import HP_Header from '../../components/HP/HP_Header';

function TermsAndConditions() {
    return (
        <div className='termsandconditions'>
            <div className='hp_header'>
                <HP_Header/>
            </div>
            
            <div className='backgroundvideo'>
                <BackGroundVideo/>
            </div>

            <div className='aboutuscontentcontainer'>
                <div className='aboutuscontent'>
                    <text className='aboutusheader'>
                        Terms & Conditions
                    </text>
                    <text>
                        [Terms and Conditions placeholder]
                    </text>
                    
                </div>
            </div>

            <div>
                <MKT_Footer />
            </div>
        </div>
    )
}

export default TermsAndConditions;