import React from 'react'
import './HomePage.scss';

import HP_Header from '../../components/HP/HP_Header';
import BackGroundVideo from '../../components/HP/BackGroundVideo';
import HP_PresentedProducts from '../../components/HP/HP_PresentedProducts';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='hp_header'>
                <HP_Header/>
            </div>
            
            <div className='backgroundvideo'>
                <BackGroundVideo/>
            </div>

            <div className='hp_presentedproducts'>
                <HP_PresentedProducts/>
            </div>
            
        </div>
        
    );
}

export default HomePage;