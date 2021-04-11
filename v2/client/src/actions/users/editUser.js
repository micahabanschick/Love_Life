export const editUser = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v2/users/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(user => dispatch({type: 'EDIT_USER', payload: user}))
  }
  
}