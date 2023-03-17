var covidVaccineToken = artifacts.require("CovidVaccineToken");

module.exports = function(deployer) {
    deployer.deploy(covidVaccineToken);
};