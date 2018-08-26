import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Logout extends Component {
  render() {
      cookies.remove('sessionid')
      if (cookies.get("sessionid") === undefined) return <Redirect to="/Login"/>
    return (
      <div>
        
      </div>
    )
  }
}

export default Logout;