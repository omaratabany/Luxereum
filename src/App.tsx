import './App.module.scss'
// import MainPage from './pages/MainPage'
import HomePage from './pages/HP/HomePage'
import LoginPage from './pages/HP/LoginPage'
import CorporateHome from './pages/CO/CorporateHome'
import CorporateCreate from './pages/CO/CorporateCreate'
import CorporateUpdate from './pages/CO/CorporateUpdate'
import CorporateTransfer from './pages/CO/CorporateTransfer'
import CorporateRevoke from './pages/CO/CorporateRevoke'
import CorporateLogs from './pages/CO/CorporateLogs'
import Market from './pages/MKT/Market'
import Product from './pages/MKT/MarketProduct'
import MarketWishlist from './pages/MKT/MarketWishlist'
import ClientHome from './pages/CL/ClientHome'
import ClientTransfer from './pages/CL/ClientTransfer'
import ClientLogs from './pages/CL/ClientLogs'
import ClientMainPage from './pages/CL/ClientMainPage'
import ClientSignUp from './pages/HP/ClientSignUp'
import ClientSell from './pages/CL/ClientSell'
import CorporateLogin from './pages/HP/CorporateLogin'
import MarketWatches from './pages/MKT/MarketWatches'
import MarketBrowse from './pages/MKT/MarketBrowse'
import MarketBags from './pages/MKT/MarketBags'
import MarketShoes from './pages/MKT/MarketShoes'
// import ClientLogin from './pages/ClientLogin'
// import CorporateLogin from './pages/CorporateLogin'
// import ClientMainPage from './pages/ClientMainPage'
// import {TextField} from '@mui/material';
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import { Link, Route, BrowserRouter, Routes, Outlet } from "react-router-dom";

function App() {
    return (
        //<MainPage />
        <BrowserRouter>
            <Routes>
                {/* <Route path="ClientLogin" element={<ClientLogin />} />
                <Route path="CorporateLogin" element={<CorporateLogin />} />
                <Route path="ClientMainPage" element={<ClientMainPage />} /> */}
                <Route path="Market/Browse" element={<MarketBrowse />} />
                <Route path="Market/Shoes" element={<MarketShoes />} />
                <Route path="Market/Bags" element={<MarketBags />} />
                <Route path="Market/Watches" element={<MarketWatches />} />
                <Route path="CorporateLogin" element={<CorporateLogin />} />
                <Route path="ClientListings" element={<ClientSell />} />
                <Route path="ClientSignUp" element={<ClientSignUp />} />
                <Route path="ClientMainPage" element={<ClientMainPage />} />
                <Route path="ClientLogs" element={<ClientLogs />} />
                <Route path="ClientTransfer" element={<ClientTransfer />} />
                <Route path="ClientHome" element={<ClientHome />} />
                <Route path="Market/Wishlist" element={<MarketWishlist/>} />
                <Route path="Market/Product" element={<Product />} />
                <Route path="Market" element={<Market />} />
                <Route path="CorporateHome" element={<CorporateHome />} />
                <Route path="CorporateCreate" element={<CorporateCreate />} />
                <Route path="CorporateUpdate" element={<CorporateUpdate />} />
                <Route path="CorporateTransfer" element={<CorporateTransfer />} />
                <Route path="CorporateRevoke" element={<CorporateRevoke />} />
                <Route path="CorporateLogs" element={<CorporateLogs />} />
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="/" element={<HomePage />}>
                <Route index element={<HomePage />} />
                {/* <Route path="*" element={<MainPage />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
