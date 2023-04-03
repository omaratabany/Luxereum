const LuxuryWatchCertificateFactory= artifacts.require("LuxuryWatchCertificateFactory");

module.exports = function (deployer, network)
{
  deployer.deploy(LuxuryWatchCertificateFactory).then(() =>
  {
    console.log("LuxuryWatchCertificateFactory deployed at address:", LuxuryWatchCertificateFactory.address);
  });
};