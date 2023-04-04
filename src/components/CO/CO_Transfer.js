import React, { useState } from 'react';
import './CO.css';
import LuxuryWatchCertificate from "./LuxuryWatchCertificate.json";
import Web3 from "web3";
import { Button } from "@mui/material";
import { TextField } from '@mui/material';


const CO_Transfer = () => {
    const [certificateId, setCertificateId] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");
    const [message, setMessage] = useState("");
    const web3 = new Web3(window.ethereum);
    const address = window.ethereum.selectedAddress;

    const handleTransfer = async () => {
        const accounts = await web3.eth.getAccounts();
        const currentAddress = accounts[0];

        const contractCount = await web3.eth.call({
            to: currentAddress,
            data: '0x06fdde03' // contract count function selector
        });

        const contractAddresses = [];
        for (let i = 0; i < contractCount; i++) {
            const address = await web3.eth.call({
                to: currentAddress,
                data: `0x55fae0d6${i.toString(16).padStart(64, '0')}` // contract address function selector + index
            });
            contractAddresses.push(address);
        }

        try {
            
            const contract = new web3.eth.Contract(
                LuxuryWatchCertificate.abi,
                address
            );
            const accounts = await web3.eth.getAccounts();
            const currentAddress = accounts[0];
            await contract.methods
                .transferCertificate(recipientAddress, certificateId)
                .send({ from: currentAddress });
            setMessage("Certificate transferred successfully!");
        } catch (error) {
            console.error(error);
            setMessage("An error occurred while transferring the certificate.");
        }
    };
return(
    <div className='co_updateform' onSubmit={handleTransfer}>
      <div className='updateformlabel'>Certificate ID</div>
      <TextField
      value = {certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        inputProps={{ style: { height: "20px" } }}
        sx={{
          color: "white",
          width: "300px",
          fontSize: "18px",
          borderColor: "white",
          borderRadius: "6px",
          backgroundColor: "#232323",
          alignSelf:"flex-start",
          marginTop: "30px",
          marginLeft: "20px",
          "& .MuiInputBase-root": { color: "white" },
          }}/>
            <div className="updateformlabel">Recipient ID</div>
  <TextField
  value={recipientAddress}
    onChange={(e) => setRecipientAddress(e.target.value)}
    inputProps={{ style: { height: "20px" } }}
    sx={{
      color: "white",
      width: "300px",
      fontSize: "18px",
      borderColor: "white",
      borderRadius: "6px",
      backgroundColor: "#232323",
      alignSelf: "flex-start",
      marginTop: "30px",
      marginLeft: "20px",
      "& .MuiInputBase-root": { color: "white" },
    }}
  />

  <Button
    variant="outlined"
    onClick={handleTransfer}
    sx={{
      color: "white",
      borderColor: "gray",
      backgroundColor: "gray",
      width: "130px",
      height: "41px",
      alignSelf: "flex-start",
      marginLeft: "20px",
      marginTop: "30px",
      ":hover": { backgroundColor: "whitesmoke", color: "gray", borderColor: "gray" },
    }}
  >
    Send
  </Button>
  {message && <p>{message}</p>}
</div>

);
};

export default CO_Transfer;



