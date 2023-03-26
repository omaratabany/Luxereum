import React, { useState, useEffect } from 'react';
import './CO.css'

import certimg from '../../assets/Images/image-24@2x.png'

function CO_CertCard() { 
    const [cert, setcert] = useState(null);

    useEffect(() => {
      fetch('public/certdata.json')
        .then(response => response.json())
        .then(data => {
          setcert(data.cert[0]);
        });
    }, []);
    
    return(
    <div className='co_certcard'>
        <img src={certimg} className='certimg'/>
        <div className='certdetails'>
        {cert ? (
          <div>
            <div className='info'>
              <p className='infolabel'>Certificate Name:</p>
              <p>{cert.ProductName}</p>
            </div>
            <div className='info'>
              <p className='infolabel'>Certificate ID:</p>
              <p>{cert.ID}</p>
            </div>

            <div className='info'>
              <p className='infolabel'>Precious Metal:</p>
              <p>{cert.PreciousMetal}</p>
            </div>

            <div className='info'>
              <p className='infolabel'>Production:</p>
              <p>{cert.Production}</p>
            </div>

            <div className='info'>
              <p className='infolabel'>Manifacturer:</p>
              <p>{cert.Manifacturer}</p>
            </div>
            
            <div className='info'>
              <p className='infolabel'>Manifacturer ID:</p>
              <p>{cert.ManifacturerID}</p>
            </div>
            
            <div className='info'>
              <p className='infolabel'>Product Grade:</p>
              <p>{cert.ProductGrade}</p>
            </div>
            
            <div className='info'>
              <p className='infolabel'>Designer Name:</p>
              <p>{cert.DesignerName}</p>
            </div>
          </div>
        ) : (
          <div>Loading Certificate information...</div>
        )}
    </div>
    </div>
    );
    }

export default CO_CertCard;