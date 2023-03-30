import React from 'react'
import './Corporate.scss';

function CorporateLogin() {
    return (
        <div className="container">   
            <h1>Corporate Login</h1>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required />  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required />  
            <button type="submit" className="submitLoginbutton">Login</button>   
            <input type="checkbox" /> Remember me   
            <button type="button" className="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    );
}

export default CorporateLogin;
