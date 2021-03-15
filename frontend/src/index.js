document.addEventListener('DOMContentLoaded', function(event) {
  // User.displayLogin();
});

const guy = new User("guy", "password", 10000);

const home = new Backend();

// home.basicFetch('post','users', guy, json => console.log(json));

Frontend.renderPortfolio(guy);