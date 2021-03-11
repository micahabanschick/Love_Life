class User {

    constructor(name){
      this._name = name;
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