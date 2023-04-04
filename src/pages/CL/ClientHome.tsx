import React, { useRef } from 'react'
import './Client.scss'

import CL_Header from '../../components/CL/CL_Header';
import CL_Sidebar from '../../components/CL/CL_Sidebar';
import CL_YourCertificates from '../../components/CL/CL_YourCertificates';
import CL_Home_ClientInfo from '../../components/CL/CL_Home_ClientInfo';
import MKT_ProductCard from '../../components/MKT/MKT_ProductCard';
import { useDraggable } from 'react-use-draggable-scroll';
import CL_ListedCertificates from '../../components/CL/CL_ListedCertificates';

function ClientHome() {
    // const ref =
    // useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    // const { events } = useDraggable(ref, {
    //     applyRubberBandEffect: true,
    // });
    
    return (
        <div className='clienthome'>
            <div className='homecolumncontainer'>
                <div className='co_sidebar'>
                    <CL_Sidebar />
                </div>
                <div className='co_home_column'>
                    <div className='co_home_column'>
                        <CL_Header />
                        
                        <div className='cl_home_content_clientinfo'>
                            <CL_Home_ClientInfo />
                        </div>

                        <div className='cl_home_content'>
                            <h1 className='yourcertificateslabel'>Your Certificates</h1>
                            <div className='yourcertificatescontent'>
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                                <CL_YourCertificates />
                               
                            </div>
                        </div>

                        <div className='cl_home_content'>
                            <h1 className='yourcertificateslabel'>Listed Products</h1>
                            <div className='yourcertificatescontent'>
                                <CL_ListedCertificates />
                                <CL_ListedCertificates />
                                <CL_ListedCertificates />
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default ClientHome;