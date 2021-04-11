import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import UserInput from '../components/users/UserInput'
import {fetchUsers} from '../actions/users/fetchUsers'
import NavBar from '../components/basics/NavBar'
import MyRoutes from '../components/basics/MyRoutes'

class UsersContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
      return (
        <div id="outer-container" styles="height: 100%;">
          {
            console.log(this.props)
          }
          
          <NavBar 
            user={this.props.user} 
            pageWrapId={"page-wrap"} 
            outerContainerId={"outer-container"} 
          />
          
          <div id="page-wrap" styles="height: 100%; overflow: auto;">

            <h1>Inside Users Container</h1>

            <Switch>

              <Route 
                exact 
                path="/" 
                component={Welcome}
              />

              <Route 
                exact 
                path='/users/new' 
                render={(routerProps) => 
                  <UserInput {...routerProps} 
                    // user={this.props.user} 
                    // project={this.props.project} 
                    // work={this.props.work}
                  />
                }
              />
              
              <MyRoutes 
                user={this.props.user} 
                project={this.props.project} 
                work={this.props.work}
              />   
                   
            </Switch> 
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    user: {
      ...state.user,
      project: state.project,
      work: state.work
    },
    project: state.project,
    work: state.work
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)