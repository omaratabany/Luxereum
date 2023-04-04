import React from 'react';
import './Client.scss';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Popup from '../../components/unused/ContractPopup';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


function ClientMainPage() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div className="clientPage">
            <div className="leftColumnClient">
                <div className="clientName">
                    <h1>
                        Abdulla Almulla
                    </h1>
                </div>
                <div>
                    <button className="refreshButton">
                        Refresh
                    </button>
                </div>
                <div>
                    <h2>
                        Certificates:
                    </h2>
                </div>
            </div>
            <div className="rightColumnClient">
                <h1>
                    Recently Added
                </h1>
                <div className="itemsClientColumn">

                
            <Paper elevation={8}
                sx={{
                    p: 2,
                    //margin: 'auto',
                    maxWidth: 500,
                    minWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    
                }}>
                <Grid container spacing={2}>
                    <Grid item sx={{width:500, height:500}}>
                        <Img alt="complex" src="https://cdn.discordapp.com/attachments/691964722538610708/1077992546812305549/backpage.png" className = "zoom"/>
                        
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            
                            <Grid item //C O N T I N U E    F R O M    H E R E    <Grid item>FontAwesomeIcon icon="" /></Grid>
                            >
                                <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={togglePopup}>
                                    
                                    {isOpen && <Popup
                                        content={<>
                                            <b>Design your Popup</b>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button>Test button</button>
                                            <img src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png"/>
                                        </>}
                                        handleClose={togglePopup}
                                    />}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </div>
            <div className="itemsClientColumn">

            
            <Paper elevation={8}
                sx={{
                    p: 2,
                    //margin: 'auto',
                    maxWidth: 500,
                    minWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    
                }}>
                <Grid container spacing={2}>
                    <Grid item sx={{width:500, height:500}}>
                        <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
                    </Grid>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={togglePopup}>
                                Expand
                                    {isOpen && <Popup
                                        content={<>
                                            <b>Design your Popup</b>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button>Test button</button>
                                            <img src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png"/>
                                        </>}
                                        handleClose={togglePopup}
                                    />}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            </div>

            <div className="itemsClientColumn">

            <Paper elevation={8}
                sx={{
                    p: 2,
                    //margin: 'auto',
                    maxWidth: 500,
                    minWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    
                }}>
                <Grid container spacing={2}>
                    <Grid item sx={{width:500, height:500}}>
                        <Img alt="complex" src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png" className = "zoom"/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={togglePopup}>
                                Expand
                                    {isOpen && <Popup
                                        content={<>
                                            <b>Design your Popup</b>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button>Test button</button>
                                            <img src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png"/>
                                        </>}
                                        handleClose={togglePopup}
                                    />}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </div>
            </div>
        </div>
    );
}

export default ClientMainPage;