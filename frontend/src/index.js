document.addEventListener('DOMContentLoaded', function(event) {
  
  let mainUrl = new Backend();
  mainUrl.basicFetch('get', 'users');
  User.displayLogin();
  
  // const guy = new User("guy", "password", 10000);
  
  // Frontend.renderPortfolio(guy);
  
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    
    console.log(this.parentElement)
    let name = document.getElementById('user_name').value
    let password = document.getElementById('password').value
    let monthlyIncome = parseInt(document.getElementById('monthly_income').value);
    if(!monthlyIncome) {
      monthlyIncome = 0;
    };
    let user = new User(name, password, monthlyIncome);
    let url = new Backend();
    url.basicFetch('post', 'users', user);
    this.parentElement.innerHTML+=`<label id="logged-in-user">Welcome ${user.name}</label><br>`
    User.removeLogin();
    User.displayLogout();
    Frontend.renderPortfolio(user); 
    event.preventDefault(); 

    // User.return(resp => {
    //   let user = new User(resp.name, resp.password, resp.monthlyIncome);
    //   console.log(user.name);
    // });     
    console.log(user.name)
    
    document.querySelector('#logout-button').addEventListener('click', function(event) {
      // mainUrl.basicFetch('post', 'users', {logout: true});
      Frontend.removePorfolio();
      console.log('logged out');
      window.location.reload(true);
    });
    
    document.querySelectorAll('.items').forEach(item => {

      item.addEventListener('click', function(event) {
        if(item.style.color === "gold") {
          item.setAttribute("style", "color: white;");
          // Expense.removeForm(item);
        } else {
          item.setAttribute("style", "color: gold");
          Expense.addForm(item);

          item.querySelector('.expense-form').addEventListener('submit', function(event) {
            console.log(this.parentElement);
            let category = item.closest('ul').id;
            let index = Array.prototype.indexOf.call(item.closest('ul').children, item.parentNode);
            let price = parseInt(item.querySelector('.price').value);
            let expense = new Expense(category, index, price);
            expense.add(user);
            Expense.removeForm(item);
            url.basicFetch('post', 'expenses', expense);
            console.log(user.monthlyIncome);
            event.preventDefault();
          });
        }
      });

    });


  });
        
  document.addEventListener('reload', function(event) {
    event.preventDefault();
  });
  
  
});
