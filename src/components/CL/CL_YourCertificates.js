import React from 'react'

import './CL.css'


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import productImg from '../../assets/Images/image-1@2x.png'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const CL_YourCertificates = () => (
                



    <div className='cl_productcard'>
            <div className='cl_productcard_productpicturecontainer'>
                <img src={productImg} className='cl_productcard_productpicturecontainer_picture'/>
            </div>

            <div className='cl_productcard_producttextcontainer'>
                <text className='cl_productcard_producttextcontainer_text'>Item Name</text>
                <text className='cl_productcard_producttextcontainer_text'>Item ID</text>
                <text className='cl_productcard_producttextcontainer_text'>Item Brand</text>
                <text className='cl_productcard_producttextcontainer_text'>Item Price</text>
            </div>
        </div>



    // <Paper elevation={8}
    // sx={{
    // p: 2,
    // //margin: 'auto',
    // maxWidth: '100%',
    // minWidth: 500,
    // minHeight: 300,
    // flexGrow: 1,
    // backgroundColor: "white",
    // left:'0px',
    // boxShadow: 3,
    // borderRadius: "10px",
    // marginBottom: "30px",
            
    // }}>
    //     <Grid container spacing={2} sx={{zIndex:100, }}>
    //         <Grid item sx={{width:300, height:300, }}>
    //             <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
    //         </Grid>

    //         <Grid item xs={12} sm container>
    //             <Grid item xs container direction="column" spacing={2}>
    //                 <Grid item xs container direction="column" alignItems="flex-start" sx={{justifyContent: "space-around"}}>
    //                     <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'black', fontSize:'24px'}}>Product Name: abc</Typography>
    //                     <Typography variant="body2" color="text.secondary" sx={{color:'black', fontSize:'24px'}}>Certificate ID: 1030114</Typography>
    //                     <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'black', fontSize:'24px'}}>Manufacturer: Rolex</Typography>
    //                     <Typography variant="body2" color="text.secondary" sx={{color:'black', fontSize:'24px'}}>Production Date: 1/1/2021</Typography>
                        
    //                 </Grid>
    //             </Grid>
    //             <Grid item xs container direction="column" alignItems="flex-end" sx={{justifyContent: "flex-start"}}>
    //             <Typography variant="subtitle1" component="div" sx={{color:'black', fontSize:'28px'}}>$10000.00</Typography>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // </Paper>
)

export default CL_YourCertificates;