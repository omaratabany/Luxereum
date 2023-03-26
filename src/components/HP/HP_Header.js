import React from 'react';
import './HP.css';

import { Button } from "@mui/material"
import { Link } from "react-router-dom";

import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


import logoUrl from '../../assets/Images/logo-1@2x.png';



const HP_Header = () => (
  
  <div className="header">
    <div className="leftHeader">
      <div className="leftButtons">
      <Button component={Link} to="/Market" variant="outlined" sx={{color: 'white', opacity:0.7, borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Market</Button>
      <Button component={Link} to="/Market/Watches" variant="outlined" sx={{color: 'white', opacity:0.7, marginLeft: "32px", borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Watches</Button>
      <Button component={Link} to="/Market/Shoes" variant="outlined" sx={{color: 'white', opacity:0.7, marginLeft: "32px", borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Shoes</Button>
      <Button component={Link} to="/Market/Bags" variant="outlined" sx={{color: 'white', opacity:0.7, marginLeft: "32px", borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Bags</Button>
      </div>
      
    </div>
    <div className="centerHeader" >
      <img src={logoUrl} className="logoimg" alt='luxereumimg' />
      <h1 className="companyName">Luxereum</h1>
    </div>
    <div className="rightHeader">
    <div className="rightButtons">
      <Button component={Link} to="/Search" variant="outlined" sx={{color: 'white', opacity:0.7, marginLeft: "32px", borderColor: "gray", backgroundColor:"gray", width:"41px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}><SearchIcon /></Button>
      <Button component={Link} to="/Market/Wishlist" variant="outlined" sx={{color: 'white', opacity:0.7, marginLeft: "32px", borderColor: "gray", backgroundColor:"gray", width:"41px", height:"41px", ':hover':{backgroundColor: "whitesmoke", color:"red", borderColor:"gray"}}}><FavoriteIcon/></Button>
      <Button component={Link} to="/LoginPage" variant="outlined" sx={{color: "black", marginLeft: "32px", borderColor: "whitesmoke", backgroundColor:"whitesmoke", width:"130px", height:"41px", ':hover':{backgroundColor: "#FAE9A8", color:"black", borderColor:"gray"}}}>Login</Button>
      <Button component={Link} to="/ClientSignUp" variant="outlined" sx={{color: "black", marginLeft: "32px", borderColor: "whitesmoke", backgroundColor:"whitesmoke", width:"130px", height:"41px", ':hover':{backgroundColor: "#FAE9A8", color:"black", borderColor:"gray"}}}>Register</Button>
    </div>
      
    </div>
    
  </div>
)
export default HP_Header;

// import {


//<Button
//           {...{
//             key: label,
//             color: "inherit",
//             to: href,
//             component: RouterLink,
//             className: menuButton
//           }}
//         >



//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   Button,
// } from "@material-ui/core";
// import React from "react";
// import { Link as RouterLink } from "react-router-dom";

// const headersData = [{
//   label: "Listings",
//   href: "/listings",
// },
// {
//   label: <h1>test</h1>,
//   href: "/mentors",
// },
// {
//   label: "My Account",
//   href: "/account",
// },
// {
//   label: "Log Out",
//   href: "/logout",
// },];
                     
// const useStyles = makeStyles(() => ({
//   menuButton: {
//   fontFamily: "Open Sans, sans-serif",
//   fontWeight: 700,
//   size: "18px",
//   marginLeft: "38px",
//   },
//   header: {
//     backgroundColor: "#400CCC",
//     paddingRight: "79px",
//     paddingLeft: "118px",
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },

// }));
                     
// export default function Header() {
//   const { header, logo, menuButton, toolbar } = useStyles();
                     
//   const displayDesktop = () => {
//     return (
//       <Toolbar className={toolbar}>
//         {femmecubatorLogo}
//         <div>{getMenuButtons()}</div>
//       </Toolbar>
//     );
//   };
                     
//   const femmecubatorLogo = (
//     <Typography variant="h6" component="h1" className={logo}>
//       Femmecubator
//     </Typography>
//   );
                     
//   const getMenuButtons = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Button
//           {...{
//             key: label,
//             color: "inherit",
//             to: href,
//             component: RouterLink,
//             className: menuButton
//           }}
//         >
//           {label}
//         </Button>
//       );
//     });
//   };
                     
//   return (
//     <header>
//       <AppBar className={header}>{displayDesktop()}</AppBar>
//     </header>
//   );
// }