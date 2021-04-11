export function fetchUsers() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v2/users')
      .then(resp => resp.json())
      .then(users => dispatch({
        type: 'FETCH_USERS',
        payload: users
      }))
    }
}