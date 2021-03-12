

let input = {
  values: [50, 30, 20], // % of slice
  labels: ['Necessities', 'Luxuries', 'Investments'], // name of slice
  colors: [
      'rgb(255,0,0)',
      'rgb(255,255,0)',
      'rgb(0,0,255)'
  ],
  layout: {
      height: 400,
      width: 500
  }
};

const basicPie = new Pie(input);

basicPie.plot();

const BACKEND_URL = 'http://localhost:3000';

const guy = new User("guy", "password", 1200);

// guy.fetchUser();

const home = new Backend(BACKEND_URL);

home.basicFetch('post','users', guy);