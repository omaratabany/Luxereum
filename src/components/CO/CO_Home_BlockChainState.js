import React from 'react'
import './CO.css'

import logoUrl from '../../assets/Images/logo-1@2x.png';



const CO_Home_BlockChainState = () => (
    <div className='co_home_blockchainstate'>
        <div className='blockchainstatecontainer'>
            <img src={logoUrl} className='blockchainpic'></img>
            <div className='bcdt'>
                <h1 className='blockchaindetailsheader'>Block Chain State</h1>
                <p className='blockchaindetails'>00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                0000000000000000000000000
                00000000000000000000000000000000000000
                000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                </p>
            </div>
            
        </div>
    </div>
)

export default CO_Home_BlockChainState
