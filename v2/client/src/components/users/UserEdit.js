import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editUser} from '../../actions/users/editUser'

class UserEdit extends Component {

  state = {
    name: '',
    password: '',
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    console.log(this.state)
    let user = {...this.state, id: this.props.user.id}
    this.props.editUser(user)
    this.setState({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
            <br/>
            <label>Password: </label>
            <input type='text' placeholder='Password' value={this.state.password} name="password" onChange={this.handleChange}/>
            <br/>
            <label>Email: </label>
            <input type='text' placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange}/>
            <br/><br/>
            <input type="submit"/>
            </form>
        </div>
    )
  }
}

UserEdit.defaultProps = {
  user: {}
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, {editUser})(UserEdit)