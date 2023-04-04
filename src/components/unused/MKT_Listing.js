import React from 'react'

import './MKT_Listing.css'
import DeleteIcon from '@mui/icons-material/Delete';


import { styled } from '@mui/material/styles';
import { Button } from "@mui/material"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const MKT_Listing = () => (
                
    <Paper elevation={8}
    sx={{
    p: 2,
    //margin: 'auto',
    maxWidth: '100%',
    minWidth: 500,
    flexGrow: 1,
    backgroundColor: "white",
    left:'0px',
    boxShadow: 3,
    borderRadius: "10px",
    marginBottom: "30px",
            
    }}>
        <Grid container spacing={2} sx={{zIndex:100, }}>
            <Grid item sx={{width:200, height:200, }}>
                <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
            </Grid>

            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'black'}}>Product Name</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color:'black'}}>ID: 1030114</Typography>
                        <Typography variant="subtitle1" component="div" sx={{color:'black'}}>$19.00</Typography>
                    </Grid>
                </Grid>
                <Grid item xs container direction="column" alignItems="flex-end">
                    <Button variant="outlined" sx={{color: 'black', boxShadow:"0px 4px 8px -2px black", marginTop: "60px", borderColor: "black", backgroundColor:"whitesmoke", width:"200px", height:"41px", ':hover':{backgroundColor: "#333333", color:"white", borderColor:"black"}}}><ShoppingCartIcon/>&nbsp;&nbsp;Add to Cart</Button>
                    <Button variant="outlined" sx={{color: 'black', boxShadow:"0px 4px 8px -2px black", marginBottom: "60px", borderColor: "black", backgroundColor:"whitesmoke", width:"200px", height:"41px", marginTop:"20px", ':hover':{backgroundColor: "#333333", color:"white", borderColor:"black"}}}><DeleteIcon/>&nbsp;&nbsp;Delete</Button>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
                
)

export default MKT_Listing;