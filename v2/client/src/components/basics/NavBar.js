import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class NavBar extends Component {

    state = {}

    navStyle = {
      color: 'rgb(190,255,90)',
      textDecoration: 'none'
    }

    styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 35em', //creates a smaller text box and reduces whitespce between items for easier readability
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
    }

  render() {
    console.log(this.props)
    if (!this.props.user.id) {
      return (
        <ReduxBurgerMenu styles={this.styles} isOpen={ this.props.isOpen }>
          <Link className="menu-item" style={this.navStyle} to='/'>Wecome</Link>
          <Link className="menu-item" style={this.navStyle} to='/users/new'>Signup/Signin</Link>
        </ReduxBurgerMenu>
      )
    } else {
      return (
        <ReduxBurgerMenu styles={this.styles} isOpen={ this.props.isOpen }>
          <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/home`}>Home</Link>
          <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/profile`}>Profile</Link>
          {
            //   <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/resume`}>Resume</Link>
            //   <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/projects`}>Projects</Link>
            //   <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/contact`}>Contact</Link>
            //   <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/about`}>About</Link>
          // <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/projects`}>Projects</Link>
          // <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/projects/new`}>Add Project</Link>
  
          // <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/works`}>Works</Link>
          // <Link className="menu-item" style={this.navStyle} to={`/users/${this.props.user.id}/works/new`}>Add Work</Link>
          }
        </ReduxBurgerMenu>
      )
    }
  }
}
  
export default NavBar