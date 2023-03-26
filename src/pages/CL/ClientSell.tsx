import React from 'react'
import './Client.scss'

import CL_Header from '../../components/CL/CL_Header';
import CL_Sidebar from '../../components/CL/CL_Sidebar';

import CL_Listing from '../../components/CL/CL_Listing';

function ClientHome() {
    return (
        <div className='corporatehome'>
            <div className='homecolumncontainer'>
                <div className='co_sidebar'>
                    <CL_Sidebar />
                </div>
                <div className='co_home_column'>
                    <CL_Header />
                    <div className='cl_sell_content'>
                        <h1 className='yourcertificateslabel'>Sell Certificates</h1>
                        <div>
                            <CL_Listing />
                            <CL_Listing />
                            <CL_Listing />
                        </div>
                        

                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ClientHome;