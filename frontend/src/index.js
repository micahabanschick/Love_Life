document.addEventListener('DOMContentLoaded', function(event) {
  User.displayLogin();
});

let input1 = {
  values: [50, 30, 20], // % of slice
  labels: ['Necessities', 'Luxuries', 'Investments'], // name of slice
  colors: [
      'rgb(255,0,0)',
      'rgb(255,255,0)',
      'rgb(0,0,255)'
  ],
  layout: {
      height: 300,
      width: 400,
      margin: {"t": 0, "b": 0, "l": 20, "r": 0}
  }
};

let input2 = {
  values: [10, 15, 20, 35, 3, 17], // % of slice
  labels: ['a', 'b', 'c', 'd', 'e', 'f'], // name of slice
  colors: [
      'rgb(255,0,0)',
      'rgb(255,255,0)',
      'rgb(0,0,255)',
      'rgb(0,111,55)',
      'rgb(50,0,25)',
      'rgb(170,30,15)'
  ],
  layout: {
      height: 200,
      width: 200
  }
};


const basicPie = new Pie(input1);
const smallPie = new Pie(input2);

basicPie.plot('big-chart');
smallPie.plot('small-chart');

const guy = new User("guy", "password", 1200);

const home = new Backend();

home.basicFetch('post','users', guy, json => console.log(json));

Frontend.renderPortfolio();