import Web3 from 'web3'
import React, { useState, useEffect } from 'react';
import './CO.css';
import { Button } from "@mui/material";
import { TextField } from '@mui/material';
import LuxuryWatchCertificateFactory from './LuxuryWatchCertificateFactory.json';
import LuxuryWatchCertificate from './LuxuryWatchCertificate.json';

const web3 = new Web3(window.ethereum);
console.log('LuxuryWatchCertificateFactory:', LuxuryWatchCertificateFactory);

const CO_Home_CreateForm = () => {
    const [ProductName, setProductName] = useState("");
    const [ProductID, setProductID] = useState("");
    const [Manufacturer, setManufacturer] = useState("");
    const [ProductionDate, setProductionDate] = useState("");
    const [ProductType, setProductType] = useState("");
    const [HolderID, setHolderID] = useState("");
    const [EmployeeName, setEmployeeName] = useState("");
    const [EmployeeID, setEmployeeID] = useState("");
    const [CreationDate, setCreationDate] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [contractFactory, setContractFactory] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const initContractFactory = async () => {
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = LuxuryWatchCertificateFactory.networks[networkId];
            const contractFactoryInstance = new web3.eth.Contract(LuxuryWatchCertificateFactory.abi, deployedNetwork && deployedNetwork.address);
            setContractFactory(contractFactoryInstance);
        };

        initContractFactory();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!contractFactory) {
            setMessage('Contract factory not found. Please check the deployed network.');
            return;
        }

        // get accounts
        web3.eth.getAccounts().then(async (accounts) => {
            try {
                // deploy the new contract
                const newContractInstance = await contractFactory.deploy({
                    data: LuxuryWatchCertificate.bytecode,
                    arguments: [
                        ProductID,
                        ProductName,
                        Manufacturer,
                        ProductionDate,
                        CreationDate
                    ]
                }).send({ from: accounts[0], gas: 5000000 });

                // get the address of the newly created contract
                const newContractAddress = newContractInstance.options.address;

                // initialize the new contract instance
                const newContract = new web3.eth.Contract(LuxuryWatchCertificate.abi, newContractAddress);

                setInputValue('');
            } catch (error) {
                console.error("Error creating contract:", error);
            }
        }).catch((error) => {
            console.error("Error getting accounts:", error);
        });
    };

    //form to get inputs from 


    return(
        <form className='co_home_createform' onSubmit={handleSubmit}>
            <div className='createformlabel'>Product Name</div>
            <TextField name={"ProductName"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Product ID</div>
            <TextField name={"ProductID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Manufacturer</div>
            <TextField name={"Manufacturer"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Production Date</div>
            <TextField name={"ProductionDate"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Product Type</div>
            <TextField name={"ProductType"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Holder ID</div>
            <TextField name={"HolderID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Employee Name</div>
            <TextField name={"EmployeeName"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Employee ID</div>
            <TextField name={"EmployeeID"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <div className='createformlabel'>Creation Date</div>
            <TextField name={"CreationDate"} inputProps={{style: {height: "20px",}, }}sx={{color:"white", width:"300px", fontSize:"18px", borderColor:"white", borderRadius:"6px", backgroundColor:"#232323", alignSelf:"flex-start", marginTop:"30px", marginLeft:"20px", "& .MuiInputBase-root": {color: 'white'}}}/>

            <Button variant="outlined" type='submit' sx={{color: 'white', borderColor: "gray", backgroundColor:"gray", width:"130px", height:"41px", alignSelf:"flex-start", marginLeft:"20px", marginTop:"30px", ':hover':{backgroundColor: "whitesmoke", color:"gray", borderColor:"gray"}}}>Create</Button>

        </form>
    )
}

export default CO_Home_CreateForm;