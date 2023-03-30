import './Client.scss';
import { useNavigate } from 'react-router-dom';

function ClientLogin() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/ClientMainPage'; 
      navigate(path);
    }

    return (
        <div className="container">   
            <h1>Client Login</h1>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required />  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required />  
            <button type="submit" className="submitLoginbutton" onClick={routeChange}>Login</button>    
            <input type="checkbox" /> Remember me   
            <button type="button" className="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    );
}

export default ClientLogin;
