const BACKEND_URL = 'localhost:3000';

function basicFetch() {
  fetch(`${BACKEND_URL}`, {
    method:'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(this)
  })
  .then(resp=>resp.json())
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse))
  .catch(error => alert(error.message));
};

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