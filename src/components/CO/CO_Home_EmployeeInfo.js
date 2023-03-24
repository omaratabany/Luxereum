import './CO.css'
import React, { useState, useEffect } from 'react';


function CO_Home_EmployeeInfo() {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetch('/employeedata.json')
          .then(response => response.json())
          .then(data => {
              setEmployee(data.Employee[0]);
          });
    }, []);

    return (
      <div className='co_home_employeeinfo'>
          <div className='employeeinfocontent'>
              <h1>Personal Profile</h1>

              {employee ? (
                <div>
                    <div className='info'>
                        <p className='infolabel'>Employee ID:</p>
                        <p>{employee.ID}</p>
                    </div>

                    <div className='info'>
                        <p className='infolabel'>Name:</p>
                        <p>{employee.Name}</p>
                    </div>

                    <div className='info'>
                        <p className='infolabel'>Reference Num:</p>
                        <p>{employee['Refrence Number']}</p>
                    </div>
                </div>
              ) : (
                <div>Loading employee information...</div>
              )}
          </div>
      </div>
    );
}

export default CO_Home_EmployeeInfo;
