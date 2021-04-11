// import { browserHistory } from 'react-router-dom'

export const addUser = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v2/users', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(user => {
      dispatch({type: 'ADD_USER', payload: user});
      // dispatch({type: 'FETCH_USER', payload: user});
    })
  }
  
}