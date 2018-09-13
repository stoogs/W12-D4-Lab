const Munroes = require('./models/munroes.js');
const MunroeListView = require('./views/munroe_lists_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroeListContainer = document.querySelector('#munroes');

  const munroesListView = new MunroeListView(munroeListContainer);
  munroesListView.bindEvents();

    const munroes = new Munroes();
    munroes.getData();

});
