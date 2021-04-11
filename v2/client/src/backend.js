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

  basicFetch(method='get', path='', body=[], callback=console.log) {
    switch(method) {
      case 'get':
        return fetch(`${this.url}/${path}`)
        .then(resp=>resp.json())
        .then(json => callback(json))
        .catch(error => alert(error));
        break;
      case 'post':
        return fetch(`${this.url}/${path}`, {
          method:'POST',
          headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then(resp=>resp.json())
        .then(json => callback(json))
        .catch(error => alert(error));
        break;
      case 'patch':
        return fetch(this.url, {
          method:'PATCH',
          headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then(resp=>resp.json())
        .then(json => callback(json))
        .catch(error => alert(error));
        break;
      // default:
        //;
    }
  }

};