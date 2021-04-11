import React from 'react'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
// import {Redirect} from 'react-router-dom'
// import User from '../components/users/User'
// import UserEdit from '../components/users/UserEdit'
// import ProjectsContainer from '../containers/ProjectsContainer'
// import WorksContainer from '../containers/WorksContainer'
// import TabsComponent from '../components/TabsComponent'

const Home = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  // let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  console.log(props)
  return (
    <div>
      <h2>
        Look at what {props.user.name} has accomplished.<br/>
        Check out all that {props.user.name} has to offer, such as impressive projects as well as productive experiences.
      </h2>
      {
            // <TabsComponent 
            //     user={props.user} 
            //     project={props.project} 
            //     work={props.work}
            // />

        }
    </div>
  );


}

export default Home