pragma solidity ^0.8.0;



contract LuxuryWatchCertificate
{
    // Event for emitting when a certificate is created
    event CertificateCreated(
        string ProdID,
        string ProdName,
        string Manu,
        string ProdDate,
        string image
    );

    // Event for emitting when a certificate is transferred
    event CertificateTransferred(
        address from,
        address to
    );



    // Event to show certificate is deleted
    event CertificateDeleted(address owner, address dummyAddress);

    // Event to show certificate is updated
    event CertificateUpdated(address owner, string ProdID, string ProdName, string Manu, string ProdDate, string image);

    // The serial number of the luxury watch
    string private ProdID;
    // The ProdName of the luxury watch
    string private ProdName;
    // The Manu of the luxury watch
    string private Manu;
    // The year of manufacture of the luxury watch
    string private ProdDate;
    // The image of the luxury watch
    string private image;
    // The owner of the luxury watch
    address public owner;
    // The new owner if transfer is initiated
    // address payable public newOwner;
    // Transfer price for watch
    uint public transferPrice;
    // Dummy address for deletion and updation
    address constant DUMMY_ADDRESS = 0x000000000000000000000000000000000000dEaD;


    // Constructor to create a new certificate
    constructor(
        string memory _ProdID,
        string memory _ProdName,
        string memory _Manu,
        string memory _ProdDate,
        string memory _image
    )
    public {
        ProdID = _ProdID;
        ProdName = _ProdName;
        Manu = _Manu;
        ProdDate = _ProdDate;
        image = _image;
        owner = msg.sender;
        emit CertificateCreated(ProdID, ProdName, Manu, ProdDate, image);
    }

    // Function to transfer ownership of the certificate to a new address with a transfer price
    function transferCertificate(address payable newOwner, uint256 transferPrice) public
    {
        require(newOwner != address(0), "New owner address must not be zero.");
        require(newOwner != address(this), "Contract address cannot own certificates.");
        require(newOwner != owner, "New owner must be different from current owner.");
        require(msg.sender == owner, "Only the owner can transfer the certificate.");

        // Send the transfer price to the current owner
        // require(msg.sender.send(transferPrice), "Transfer price sending failed.");

        // Transfer ownership of the certificate to the new owner
        emit CertificateTransferred(owner, newOwner);
        owner = newOwner;
    }

    // Function to delete the certificate
    function deleteCertificate() public
    {
        require(msg.sender == owner, "Only the owner can delete the certificate.");
        emit CertificateDeleted(owner, DUMMY_ADDRESS);
        owner = DUMMY_ADDRESS;
    }

    function updateCertificate(string memory newProdID, string memory newProdName, string memory newManu, string memory newProdDate, string memory newImage) public {
        require(msg.sender == owner, "Only the owner can update the certificate.");

        // Delete the previous certificate by transferring ownership to the dummy address
        emit CertificateDeleted(owner, DUMMY_ADDRESS);
        owner = DUMMY_ADDRESS;

        // Create a new certificate with the updated data and transfer ownership to the contract owner
        ProdID = newProdID;
        ProdName = newProdName;
        Manu = newManu;
        ProdDate = newProdDate;
        image = newImage;
        owner = msg.sender;
        emit CertificateUpdated(owner, ProdID, ProdName, Manu, ProdDate, image);
    }

    // Function to set the image of the luxury watch
    function setImage(string memory _image) public {
        require(msg.sender == owner, "Only the owner can set the image.");
        image = _image;
    }

    // Getter function to retrieve the serial number
    function getProdID() public view returns (string memory) {
        return ProdID;
    }

    // Get function to retrieve the ProdName
    function getProdName() public view returns (string memory) {
        return ProdName;
    }

    // Get function to retrieve the Manu
    function getManu() public view returns (string memory) {
        return Manu;
    }

    // Get function to retrieve the year of manufacture
    function getProdDate() public view returns (string memory) {
        return ProdDate;
    }

    // Get function to retrieve the image
    function getImage() public view returns (string memory) {
        return image;
    }

    // Get function to retrieve the owner
    function getOwner() public view returns (address) {
        return owner;
    }

}
