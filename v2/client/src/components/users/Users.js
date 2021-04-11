import React from 'react'
import {Link} from 'react-router-dom'
// import userReducer from '../../reducers/userReducer'
// import User from './User'

const Users = (props) => {

  return (
    <div>
      {
        // console.log(props)
      }
      {
        props.user.index.map(user => 
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        )
      }
    </div>

  )

  // return (
  //   <div>
  //     {
  //       console.log(props)
  //       if ({props.users}) {
          
  //         props.users.map(user => 
  //           <li key={user.id}>{user.name} - {user.email}</li> 
  //         )
          
  //         // props.users.map(user =>
  //         //   <li key={user.id}>
  //         //     <Link to={`/users/${user.id}`}>{user.name} - ${user.email}</Link>
  //         //   </li> 
  //         // )
  //       } else {
  //         <h2>Else is called</h2>
  //       }
          
  //     }
  //   </div>
  // )

}

export default Users