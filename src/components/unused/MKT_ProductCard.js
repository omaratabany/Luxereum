import React from 'react'

import './MKT_ProductCard.css'


import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const MKT_ProductCard = () => (
                
    <Paper elevation={8}
    sx={{
    p: 2,
    //margin: 'auto',
    maxWidth: 500,
    minWidth: 500,
    flexGrow: 1,
    backgroundColor: "white",
    left:'0px',
    boxShadow: 3,
    borderRadius: "10px",
            
    }}>
        <Grid container spacing={2} sx={{zIndex:100, }}>
            <Grid item sx={{width:200, height:200, }}>
                <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
            </Grid>

            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'black'}}>Product Name</Typography>
                        <Typography variant="body2" gutterBottom sx={{color:'black'}} >Product Brand</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color:'black'}}>ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                        <Typography component={Link} to="/Market/Product" sx={{ cursor: 'pointer', color:'black' }} variant="body2">Add To Cart</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div" sx={{color:'black'}}>$19.00</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
                
)

export default MKT_ProductCard;