import React from 'react'
// import {Redirect} from 'react-router-dom'
import UserEdit from './UserEdit'
// import ProjectsContainer from '../../containers/ProjectsContainer'
// import WorksContainer from '../../containers/WorksContainer'

const User = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  // let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  console.log(props.user)
  return (
    
    <div>
      <h2>
        {props.user.name} - {props.user.email}
      </h2>
      {
        // <ProjectsContainer user={props.user} index={props.project}/><br/>
        // <WorksContainer user={props.user} index={props.work}/><br/>
      }
      <h4>Edit User</h4>
      <UserEdit user={props.user}/>
    </div>
  )


}

export default User