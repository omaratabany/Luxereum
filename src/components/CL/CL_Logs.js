import React from 'react'
import axios from 'axios';
import './CL.css'

import CO_CertCard from './CO_CertCard';



const CL_Logs = () => (
    <div className='co_logs'>
        <div className='rightlogscontainer'>
            <CO_CertCard />
            <CO_CertCard />
            <CO_CertCard />
        </div>
        <div className='rightlogscontainer'>
            <CO_CertCard /> 
            <CO_CertCard />
            <CO_CertCard />
        </div>
    </div>
)

export default CL_Logs;