import React from 'react'
import './Corporate.scss'

import CO_Header from '../../components/CO/CO_Header';
import CO_Sidebar from '../../components/CO/CO_Sidebar';
import CO_Revoke from '../../components/CO/CO_Revoke';


function CorporateRevoke() {
    return (
        <div className='corporatehome'>
            <div className='columncontainer'>
                <div className='co_sidebar'>
                    <CO_Sidebar />
                </div>
                <div className='co_content'>
                    <CO_Header />
                    <div className='co_revoke_content'>
                        <CO_Revoke />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateRevoke;