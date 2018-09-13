const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munroes = function () {
    this.munroes = [];
};

Munroes.prototype.getData = function () {
    const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');

    requestHelper.get((data) => {
        this.munroes = data;
        PubSub.publish('Munroes:munroes-data-ready', this.munroes);
    });

    }



// Countries.prototype.getData = function(){
//     const request = new Request("https://restcountries.eu/rest/v2/all");
//
//     request.get((data) => {
//         this.countries = data;
//         PubSub.publish("Countries:country-data", this.countries);
//         // console.log(this.countries);
//     });
module.exports = Munroes;


