document.addEventListener('DOMContentLoaded', function(event) {
  
  User.displayLogin();
  
  const guy = new User("guy", "password", 10000);
  
  // Frontend.renderPortfolio(guy);
  
  document.querySelectorAll('.items').forEach(item => {
    item.addEventListener('click', function(event) {
      console.log('lol');
    })
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    console.log(this.parentElement);
    let name = document.getElementById('user_name').value;
    let password = document.getElementById('password').value;
    let monthlyIncome = document.getElementById('monthly_income').value;
    const user = new User(name, password, monthlyIncome);
    const url = new Backend();
    url.basicFetch('post', 'users', user);
    this.parentElement.innerHTML+=`<label id="logged-in-user">Account: ${user.name}</label>`;
    User.removeLogin();
    User.displayLogout();
    Frontend.renderPortfolio();
    event.preventDefault();        
  });

});