//import './MainPage.scss';
import {TextField} from '@mui/material';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function MainPage() {
    return (
        <div>
            <div className="title">
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                    className="logo"
                />
            </div>
            <div className="corpClientButtons">
                <a href="./CorporateLogin" className="corporateLink">
                    <div className="split left">
                        <div className="centered">Corporate</div>
                    </div>
                </a>


                <a href="./ClientLogin" className="corporateLink">
                    <div className="split right">
                        <div className="centered">Client</div>
                    </div>
                </a>
            </div>
            <div className='quickSearch'>
               <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1080, height: 67 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: 33 }}
                        placeholder="Search Luxereum"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon className='searchButton'/>
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    
                </Paper>
            </div>
            
        </div> 
    );
}

export default MainPage;