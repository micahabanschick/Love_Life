const BACKEND_URL = 'localhost:3000';
fetch(`${BACKEND_URL}`,{
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