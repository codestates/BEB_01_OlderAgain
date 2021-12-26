const OAToken = artifacts.require('OAToken');

module.exports = function (deployer) {
	deployer.deploy(OAToken);
};
