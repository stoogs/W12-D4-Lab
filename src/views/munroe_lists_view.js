const PubSub = require('../helpers/pub_sub.js');
const MunroeView = require('./munroe_view.js');

const MunroeListView = function (container) {
    this.container = container;
};

MunroeListView.prototype.bindEvents = function () {
    PubSub.subscribe('Munroes:munroes-data-ready', (event) => {
    this.munroes = event.detail;
    console.log(this.munroes);
    let nameContainer = document.querySelector('#munroes');
    // console.log(nameContainer);
    let addUL = document.createElement('ul');
    nameContainer.appendChild(addUL);
    this.munroes.forEach((munroe) => {
        let addListItem = document.createElement('li');

        addListItem.textContent = `The mountain is ${munroe.name} and it's height is ${munroe.height} feet`;
        nameContainer.appendChild(addListItem);
        
        })
    });
};

module.exports = MunroeListView;