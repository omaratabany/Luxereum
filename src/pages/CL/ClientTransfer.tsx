import React from 'react'
import './Client.scss'

import CO_Transfer from '../../components/CO/CO_Transfer';
import CL_Sidebar from '../../components/CL/CL_Sidebar';
import CL_Header from '../../components/CL/CL_Header';

function ClientTransfer() {
    return (
        <div className='corporatehome'>
            <div className='columncontainer'>
                <div className='co_sidebar'>
                    <CL_Sidebar />
                </div>
                <div className='co_content'>
                    <CL_Header />
                    <div className='co_revoke_content'>
                        <CO_Transfer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTransfer;