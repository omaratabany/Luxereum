import React from 'react';

import './HP.css';


import { styled } from '@mui/material/styles';
import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import productImg from '../../assets/Images/image-1@2x.png'


// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
// });


const HP_PresentedProducts = () => (

    <a href='/Market/Product' style={{textDecoration: 'none'}}>
        <div className='hp_productcard'>
            <div className='hp_productcard_productpicturecontainer'>
                <img src={productImg} className='hp_productcard_productpicturecontainer_picture'/>
            </div>

            <div className='hp_productcard_producttextcontainer'>
                <text className='hp_productcard_producttextcontainer_text'>Item Name</text>
                <text className='hp_productcard_producttextcontainer_text'>Item ID</text>
                <text className='hp_productcard_producttextcontainer_text'>Item Brand</text>
                <text className='hp_productcard_producttextcontainer_text'>Item Price</text>
            </div>
        </div>
    </a>

    // <div>
    //     <div>
    //         <Button component={Link} to="/Market/Watches" variant="outlined" sx={{color: "black", opacity:0.7, borderColor: "whitesmoke", backgroundColor:"whitesmoke", width:"200px", height:"41px", ':hover':{backgroundColor: "#FAE9A8", color:"black", borderColor:"gray"}}}>See all watches</Button>
    //     </div>
    //     <div className='productcardset'>
    //         <Paper elevation={8}
    //             sx={{
    //                 p: 2,
    //                 //margin: 'auto',
    //                 maxWidth: 500,
    //                 minWidth: 500,
    //                 flexGrow: 1,
    //                 backgroundColor: "#212121",
    //                 opacity: 0.7,
    //                 left:'0px',
    //                 boxShadow: 3,
                    
    //             }}>
    //             <Grid container spacing={2} sx={{zIndex:100, }}>
    //                 <Grid item sx={{width:200, height:200, }}>
    //                     <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
    //                 </Grid>

    //                 <Grid item xs={12} sm container>
    //                     <Grid item xs container direction="column" spacing={2}>
    //                         <Grid item xs>
    //                             <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'white'}}>
    //                                 Standard license
    //                             </Typography>
    //                             <Typography variant="body2" gutterBottom sx={{color:'white'}} >
    //                                 Full resolution 1920x1080 • JPEG
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
    //                                 ID: 1030114
    //                             </Typography>
    //                         </Grid>
    //                         <Grid item>
    //                             <Typography sx={{ cursor: 'pointer', color:'white' }} variant="body2">
    //                             Expand
    //                             </Typography>
    //                         </Grid>
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography variant="subtitle1" component="div" sx={{color:'white'}}>
    //                             $19.00
    //                         </Typography>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Paper>

    //         <Paper elevation={16}
    //             sx={{
    //                 p: 2,
    //                 //margin: 'auto',
    //                 maxWidth: 500,
    //                 minWidth: 500,
    //                 flexGrow: 1,
    //                 backgroundColor: "#212121",
    //                 opacity: 0.7,
    //                 margin: 'auto',
    //                 alignSelf:'center',
    //                 alignItems: 'center',
    //                 flex:'auto',
    //                 boxShadow: 3,
                    
                    
    //             }}>
    //             <Grid container spacing={2} sx={{zIndex:100, }}>
    //                 <Grid item sx={{width:200, height:200, }}>
    //                     <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
    //                 </Grid>

    //                 <Grid item xs={12} sm container>
    //                     <Grid item xs container direction="column" spacing={2}>
    //                         <Grid item xs>
    //                             <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'white'}}>
    //                                 Standard license
    //                             </Typography>
    //                             <Typography variant="body2" gutterBottom sx={{color:'white'}} >
    //                                 Full resolution 1920x1080 • JPEG
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
    //                                 ID: 1030114
    //                             </Typography>
    //                         </Grid>
    //                         <Grid item>
    //                             <Typography sx={{ cursor: 'pointer', color:'white' }} variant="body2">
    //                             Expand
    //                             </Typography>
    //                         </Grid>
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography variant="subtitle1" component="div" sx={{color:'white'}}>
    //                             $19.00
    //                         </Typography>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Paper>

    //         <Paper elevation={8}
    //             sx={{
    //                 p: 2,
    //                 //margin: 'auto',
    //                 maxWidth: 500,
    //                 minWidth: 500,
    //                 flexGrow: 1,
    //                 backgroundColor: "#212121",
    //                 opacity: 0.7,
    //                 right:'0px',
    //                 boxShadow: 3,
                    
                    
    //             }}>
    //             <Grid container spacing={2} sx={{zIndex:100, }}>
    //                 <Grid item sx={{width:200, height:200, }}>
    //                     <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
    //                 </Grid>

    //                 <Grid item xs={12} sm container>
    //                     <Grid item xs container direction="column" spacing={2}>
    //                         <Grid item xs>
    //                             <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'white'}}>
    //                                 Standard license
    //                             </Typography>
    //                             <Typography variant="body2" gutterBottom sx={{color:'white'}} >
    //                                 Full resolution 1920x1080 • JPEG
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
    //                                 ID: 1030114
    //                             </Typography>
    //                         </Grid>
    //                         <Grid item>
    //                             <Typography sx={{ cursor: 'pointer', color:'white' }} variant="body2">
    //                             Expand
    //                             </Typography>
    //                         </Grid>
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography variant="subtitle1" component="div" sx={{color:'white'}}>
    //                             $19.00
    //                         </Typography>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Paper>
    //     </div>
    // </div>
)

export default HP_PresentedProducts;