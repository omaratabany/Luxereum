import Web3 from "web3";
import contract from "@truffle/contract";
import LuxuryWatchCertificateContract from "Luxereum/public/certdata.json";

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

const LuxuryWatchCertificate = contract(LuxuryWatchCertificateContract);
LuxuryWatchCertificate.setProvider(provider);

export default class LuxuryWatchCertificateWrapper {
  constructor(address) {
    this.contractAddress = address;
  }

  async createCertificate(serialNumber, brand, model, yearOfManufacture, image) {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    await instance.createCertificate(serialNumber, brand, model, yearOfManufacture, image);
  }

  async transferCertificate(newOwner, transferPrice) {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    await instance.transferCertificate(newOwner, transferPrice);
  }

  async deleteCertificate() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    await instance.deleteCertificate();
  }

  async updateCertificate(serialNumber, brand, model, yearOfManufacture, image) {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    await instance.updateCertificate(serialNumber, brand, model, yearOfManufacture, image);
  }

  async setImage(image) {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    await instance.setImage(image);
  }

  async getSerialNumber() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getSerialNumber();
  }

  async getBrand() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getBrand();
  }

  async getModel() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getModel();
  }

  async getYearOfManufacture() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getYearOfManufacture();
  }

  async getImage() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getImage();
  }

  async getOwner() {
    const instance = await LuxuryWatchCertificate.at(this.contractAddress);
    return await instance.getOwner();
  }
}
