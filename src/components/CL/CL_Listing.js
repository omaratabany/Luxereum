import React from 'react'

import './CL.css'
import DeleteIcon from '@mui/icons-material/Delete';


import { styled } from '@mui/material/styles';
import { Button } from "@mui/material"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SellIcon from '@mui/icons-material/Sell';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const CL_Listing = () => (
                
    <Paper elevation={8}
    sx={{
    p: 2,
    //margin: 'auto',
    maxWidth: '100%',
    minWidth: 500,
    minHeight: 300,
    flexGrow: 1,
    backgroundColor: "white",
    left:'0px',
    boxShadow: 3,
    borderRadius: "10px",
    marginBottom: "30px",
            
    }}>
        <Grid container spacing={2} sx={{zIndex:100, }}>
            <Grid item sx={{width:300, height:300, }}>
                <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
            </Grid>

            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs container direction="column" alignItems="flex-start" sx={{justifyContent: "space-around"}}>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'black', fontSize:'24px'}}>Product Name</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color:'black', fontSize:'24px'}}>ID: 1030114</Typography>
                        <Typography variant="subtitle1" component="div" sx={{color:'black', fontSize:'24px'}}>$19.00</Typography>
                    </Grid>
                </Grid>
                <Grid item xs container direction="column" alignItems="flex-end" sx={{justifyContent: "space-around"}}>
                    <Button variant="outlined" sx={{color: 'black', boxShadow:"0px 4px 8px -2px black", marginBottom: "60px", borderColor: "black", backgroundColor:"whitesmoke", width:"200px", height:"41px", ':hover':{backgroundColor: "#333333", color:"white", borderColor:"black"}}}><SellIcon/>&nbsp;&nbsp;Sell</Button>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
                
)

export default CL_Listing;