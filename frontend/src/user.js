class User {

  constructor(name, password, monthlyIncome){
    this._name = name;
    this._password = password;
    this._monthlyIncome = monthlyIncome;
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

  set name(name) {
    this._name = name;
  }

  set password(password) {
    this._password = password;
  }

  set monthlyIncome(monthlyIncome) {
    this._monthlyIncome = monthlyIncome;
  }

  login() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
      console.log(this.parentElement)
      let name = document.getElementById('user_name').value
      let password = document.getElementById('password').value
      let monthlyIncome = document.getElementById('monthly_income').value;
      const url = new Backend();
      const user = new User(name, password, monthlyIncome);
      url.basicFetch('post', 'users', user);
      this.parentElement.innerHTML+=`<label id="logged-in-user">Account: ${user.name}</label>`
      removeLogin();
      displayLogout();
      event.preventDefault();        
    })
  }

  static displayLogin() {
    if (!document.getElementById('login-form')){
      document.getElementById('login').innerHTML+=`
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