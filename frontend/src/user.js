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
      document.getElementById('login-form').addEventListener('submit', function(event){
          console.log(this.parentElement)
          let name = document.getElementById('name').value
          const user = new User(name)
          const url = new Backend('http://localhost:3000');
          url.basicFetch('post', 'users', user) //creating or finding user in the backend
          this.parentElement.innerHTML+=`<label id="logged-in-user">Account: ${name}   </label>`
          event.preventDefault()
      })
    }
    
  };