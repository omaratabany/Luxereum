import React from 'react'
import './CO.css'

import CO_CertCard from './CO_CertCard';



const CO_Logs = () => (
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

export default CO_Logs;