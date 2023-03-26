import React, { useState, useEffect } from 'react';
import './CL.css';

import certimg from '../assets/Images/image-24@2x.png';
import CL_CertCard from './CL_CertCard';

function CL_CertList() {
    const [certs, setCerts] = useState(null);

    useEffect(() => {
        fetch('/certdata.json')
          .then(response => response.json())
          .then(data => {
              setCerts(data.cert);
          });
    }, []);

    return (
      <div>
          {certs ? (
            <div>
                {certs.map(cert => (
                  <CL_CertCard key={cert.ID} cert={cert} />
                ))}
            </div>
          ) : (
            <div>Loading Certificate information...</div>
          )}
      </div>
    );
}

function CL_CertCard({ cert }) {
    return (
      <div className='co_certcard'>
          <img src={certimg} className='certimg' />
          <div className='certdetails'>
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
      </div>
    );
}

export default CL_CertList;
