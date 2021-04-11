import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import Users from './users/Users'
import User from '../users/User'
import About from '../../pages/Welcome'
import Home from '../../pages/Home'
// import ProjectsContainer from '../containers/ProjectsContainer'
// import WorksContainer from '../containers/WorksContainer'

const MyRoutes = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  // let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  return (

    <Switch>

      <Route 
        exact 
        path='/users/:id/home' 
        render={(routerProps) => 
          <Home {...routerProps} 
            user={props.user} 
          />
        }
      />

      <Route 
        exact 
        path='/users/:id/profile' 
        render={(routerProps) => 
          <User {...routerProps} 
            user={props.user} 
            project={props.project} 
            work={props.work}
          />
        }
      />

      <Route 
        exact 
        path='/users/:id/about' 
        render={(routerProps) => 
          <About {...routerProps} 
            user={props.user}
          />
        }
      />

    {      
      // <Route exact path='/users' render={(routerProps) => <Users {...routerProps} user={props.user}/>}/>
    }

    </Switch> 
    
  )
}

export default MyRoutes