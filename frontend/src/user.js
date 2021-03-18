class User {

  constructor(name, password, monthlyIncome=3000){
    this._name = name;
    this._password = password;
    this._monthlyIncome = monthlyIncome;
    this._expenses = [];
  }

  get name() {
    return this._name;
  }

  get password() {
    return this._password;
  }

  get monthlyIncome() {
    return this._monthlyIncome;
  }

  get expenses() {
    return this._expenses;
  }

  set name(name) {
    this._name = name;
  }

  set password(password) {
    this._password = password;
  }

  set monthlyIncome(monthlyIncome) {
    this._monthlyIncome = monthlyIncome;
  }

  set expenses(expenses) {
    this._expenses = expenses;
  }

  expensesOverview = {
    necessities: {
      all: this.expenses.filter(expense => expense.category === "necessities"),
      total: this.expenses.filter(expense => expense.category === "necessities").map(expense => expense.price).reduce((tot, curr) => tot + curr)
    }
  }

  // static get(data) {
  //   let user = new User(data.name, data.password, data.monthlyIncome);
  //   console.log(user.name);
  // }

  static async return(callback) {
    let tempUrl = new Backend();
    const response = await tempUrl.basicFetch('get', 'users', [], resp => {
      let name = resp.data.attributes.name;
      let password = resp.data.attributes.password;
      let monthlyIncome = resp.data.attributes.monthly_income;
      let user = new User(name, password, monthlyIncome);
      return user
    });
    return callback(response)
    // console.log(response.name)
  }

  static login() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
      console.log(this.parentElement)
      let name = document.getElementById('user_name').value
      let password = document.getElementById('password').value
      let monthlyIncome = document.getElementById('monthly_income').value;
      const user = new User(name, password, monthlyIncome);
      const url = new Backend();
      url.basicFetch('post', 'users', user);
      this.parentElement.innerHTML+=`<label id="logged-in-user">Welcome ${user.name}</label><br>`
      User.removeLogin();
      User.displayLogout();
      Frontend.renderPortfolio(user);
      event.preventDefault();        
    })
  }

  static displayLogin() {
    if (!document.getElementById('login-form')) {
      document.getElementById('login').innerHTML=`
        <form id="login-form" action="http://localhost:3000/users" method="post">
          <label for="user_name">Name: </label>
          <br>
          <input type="text" id="user_name" name="user_name" placeholder="Name">
          <br><br>
          <label for="password">Password: </label>
          <br>
          <input type="password" id="password" name="password" placeholder="Password">
          <br><br>
          <label for="monthly_income">Monthly Income: </label>
          <br>
          <input id="monthly_income" name="monthly_income" placeholder="Monthly Income">
          <br><br>
          <input type="submit" value="Login">
        </form>
      `
    }
  }

  static inputMonthlyIncome() { //might need to add a hidden patch tag
    document.getElementById('login-form').innerHTML+=`
      <form id="login" action="http://localhost:3000/users" method="post"> 
        <label for="monthly_income">Monthly Income: </label>
        <br>
        <input id="monthly_income" name="monthly_income">
        <br><br>
        <input type="submit" value="Login">
      </form>
    `
  }

  static removeLogin() {
    let element = document.getElementById('login-form');
    element.remove();
  }

  static displayLogout(){
    let element = document.getElementById('login') //maybe place logout button elsewhere
    element.innerHTML+="<button id='logout-button'>Logout</button>"
  }
    
};