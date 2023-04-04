import React from 'react'
import './Client.scss'

import CL_Header from '../../components/CL/CL_Header';
import CL_Sidebar from '../../components/CL/CL_Sidebar';
import CL_Logs from '../../components/CO/CO_Logs';


function ClientLogs() {
    return (
        <div className='corporatehome'>
            <div className='columncontainer'>
                <div className='cl_sidebar'>
                    <CL_Sidebar />
                </div>
                <div className='co_content'>
                    <CL_Header />
                    <div className='co_logs_content'>
                        <CL_Logs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientLogs;