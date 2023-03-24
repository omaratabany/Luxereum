import React from 'react'
import './Corporate.scss'

import CO_Header from '../../components/CO/CO_Header';
import CO_Sidebar from '../../components/CO/CO_Sidebar';
import CO_Home_EmployeeInfo from '../../components/CO/CO_Home_EmployeeInfo';
import CO_Home_WorkStates from '../../components/CO/CO_Home_WorkStates';
import CO_Home_BlockChainState from '../../components/CO/CO_Home_BlockChainState';
import CO_Home_MessageBoard from '../../components/CO/CO_Home_MessageBoard';


function CorporateHome() {
    return (
        <div className='corporatehome'>
            <div className='homecolumncontainer'>
                <div className='co_sidebar'>
                    <CO_Sidebar />
                </div>
                <div className='co_home_column'>
                    <CO_Header />
                    <div className='co_home_content'>
                        <div className='co_home_content_left'>
                            <CO_Home_EmployeeInfo />
                            <CO_Home_WorkStates />
                            <CO_Home_BlockChainState />
                        </div>
                        <div className='co_home_content_right'>
                            <CO_Home_MessageBoard />

                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CorporateHome;



{/* <div className='corporatehome'>
    <div className='columncontainer'>
        <div className='co_sidebar'>
            <CO_Sidebar />
        </div>
        <div className='co_content'>
            <CO_Header />
        </div>
    </div>
</div> */}