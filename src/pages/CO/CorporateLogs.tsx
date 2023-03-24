import React from 'react'
import './Corporate.scss'

import CO_Header from '../../components/CO/CO_Header';
import CO_Sidebar from '../../components/CO/CO_Sidebar';
import CO_Logs from '../../components/CO/CO_Logs';


function CorporateLogs() {
    return (
        <div className='corporatehome'>
            <div className='columncontainer'>
                <div className='co_sidebar'>
                    <CO_Sidebar />
                </div>
                <div className='co_content'>
                    <CO_Header />
                    <div className='co_logs_content'>
                        <CO_Logs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateLogs;