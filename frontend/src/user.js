class User {

    constructor(name){
      this._name = name;
    }
  
    postUser(){
      fetch("http://localhost:3000/users",{
        method:'POST',
        headers: {
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this)
      })
      .then(resp=>resp.json())
      .then(user=>displayPortfolio(user))
      .catch(error => alert(error.message));
    }

    login() {
      document.getElementById('login-form').addEventListener('submit', function(event){
          console.log(this.parentElement)
          let name = document.getElementById('name').value
          const user = new User(name)
          user.postUser() //creating or finding user in the backend
          this.parentElement.innerHTML+=`<label id="logged-in-user">Account: ${name}   </label>`
          event.preventDefault()
      })
    }
    
  };