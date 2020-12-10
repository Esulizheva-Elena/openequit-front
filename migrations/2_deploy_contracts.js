
var CoinCreator=artifacts.require('CoinCreator.sol')
// var FinalizableCrowdsale=artifacts.require('FinalizableCrowdsale.sol')
module.exports = function(deployer,network, account) {
    deployer.then(async () => {
    await deployer.deploy(CoinCreator);
    // await deployer.deploy(FinalizableCrowdsale)
    }
)

};
