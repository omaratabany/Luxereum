firstly when you open the code go to the terminal and type npm -f install after that you would ignore all the error that appear as they are just UI-conflicts that don't affect the functionality or view of the program.
then you also need to download metamask and have the ganache network connected and have one of the users as an imported wallet in your metamask these are the steps for that: In the Ganache workspace, click on the key icon on any of the 10 available accounts to copy the private key. Open the Metamask extension and click on the account icon. Click on "Import Account". Paste the private key copied from Ganache and click on "Import". Your Ganache account should now be visible in your Metamask wallet. To connect your Metamask wallet to Ganache, click on the network dropdown in the Metamask extension and select "Custom RPC". In the "New RPC URL" field, enter "http://localhost:7545" (which is the default Ganache RPC endpoint). in the chain id put in 1337. Click on "Save". You should now be connected to the Ganache network through your Metamask wallet.
you need to make sure ganache is downloaded as we are using that as a test network and that you change the truffle config file to have the correct ganache network id
Install Truffle: npm install -g truffle Initialize a new Truffle project: truffle init
IN TRUFFLE CONFIG FILE IN NETWORK
ganache: { host: "127.0.0.1", port: 7545, // or your Ganache port number network_id: <GANACHE_NETWORK_ID>, \ you need to replace this with your ganache network id for testing },
after that, you need to run these commands on your terminal
truffle compile truffle migrate --network ganache
after all, is done type in the terminal npm start
