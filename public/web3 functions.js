import React, { useState } from "react";
import Web3 from "web3";
import LuxuryWatchCertificateContract from "Luxereum/public/certdata.json";

function App() {
  const [contractInstance, setContractInstance] = useState(null);
  const [account, setAccount] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState(0);
  const [image, setImage] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [transferPrice, setTransferPrice] = useState(0);
  const [certificateEvent, setCertificateEvent] = useState("");
  const [transferEvent, setTransferEvent] = useState("");
  const [deleteEvent, setDeleteEvent] = useState("");
  const [updateEvent, setUpdateEvent] = useState("");

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = LuxuryWatchCertificateContract.networks[networkId];
    if (networkData) {
      const contract = new web3.eth.Contract(
        LuxuryWatchCertificateContract.abi,
        networkData.address
      );
      setContractInstance(contract);
      const serialNumber = await contract.methods.getSerialNumber().call();
      setSerialNumber(serialNumber);
      const brand = await contract.methods.getBrand().call();
      setBrand(brand);
      const model = await contract.methods.getModel().call();
      setModel(model);
      const yearOfManufacture = await contract.methods
        .getYearOfManufacture()
        .call();
      setYearOfManufacture(yearOfManufacture);
      const image = await contract.methods.getImage().call();
      setImage(image);
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }
  };

  const createCertificate = async () => {
    const web3 = window.web3;
    const contract = new web3.eth.Contract(
      LuxuryWatchCertificateContract.abi,
      LuxuryWatchCertificateContract.networks["5777"].address
    );
    setContractInstance(contract);
    const accounts = await web3.eth.getAccounts();
    const serialNumber = document.getElementById("serialNumber").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const yearOfManufacture = document.getElementById("yearOfManufacture").value;
    const image = document.getElementById("image").value;
    await contract.methods
      .createCertificate(serialNumber, brand, model, yearOfManufacture, image)
      .send({ from: accounts[0] });
    setCertificateEvent(`Certificate created with Serial Number ${serialNumber}`);
    setSerialNumber(serialNumber);
    setBrand(brand);
    setModel(model);
    setYearOfManufacture(yearOfManufacture);
    setImage(image);
  };
}