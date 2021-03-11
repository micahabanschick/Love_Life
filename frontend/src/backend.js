class Backend {

  constructor(url=`http://localhost:3000`) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  set url(url) {
    this._url = url;
  }

  basicFetch(path='') {
    fetch(`${this.url}/${path}`)//, {
    //   method:'POST',
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(this)
    // })
    .then(resp=>resp.json())
    .then(parsedResponse => console.log(parsedResponse))
    .catch(error => alert(error.message));
  };

};