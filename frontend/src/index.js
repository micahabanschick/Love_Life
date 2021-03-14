document.addEventListener('DOMContentLoaded', function(event) {
  User.displayLogin();
});

const guy = new User("guy", "password", 1200);

const home = new Backend();

home.basicFetch('post','users', guy, json => console.log(json));

Frontend.renderPortfolio();