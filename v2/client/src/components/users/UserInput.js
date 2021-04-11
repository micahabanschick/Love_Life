import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {addUser} from '../../actions/users/addUser'
// import usersReducer from '../../reducers/usersReducer'

class UserInput extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  }
  
  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value},
      () => console.log('Login: ' + JSON.stringify(this.state))
    )
  }
    
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
    console.log(this.props.history)
    console.log(this.state)
    // this.props.history.push(`/users/${this.state.id}`)
    this.setState({
      // {name, password, email} = this.state
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    })
  }

  style = {
    fontSize: '12', 
    padding: '6em' 
  }
  
  render() {
    console.log(this)
    if (this.props.user.id) {
      return (
        <Redirect to={`/users/${this.props.user.id}/home`} />
      )
    } else {
    // debugger
      return (
        <Container fluid="sm">
          <h2>Inside User Input</h2>
          <Form onSubmit={this.handleSubmit} style={this.style}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" value={this.state.email} name="email" onChange={this.handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {addUser})(UserInput)