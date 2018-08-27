import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Login extends Component {

  state= {
    statusRedirect: false
  }
  
    fungsiLogin = (e) => {
      var self = this
     axios.post(`http://localhost:8002/userlogin`, {
         username: e.username.value,
         password: e.password.value
     }).then((hasil) => {
         var respon= hasil.data
         if(respon !== 0) {
          cookies.set("sessionid", respon, {path: '/'})
          self.setState({
                      statusRedirect: true
                  });
         }
         
     });
   }

  render() {
    if(this.state.statusRedirect) return <Redirect to="/"/>
    return (
      <div >

      <div className="container py-5" style={{minHeight: 480}}>
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail4">Username </label>
                <input ref="username" type="text" className="form-control" id="inputEmail4" placeholder="Type username..." />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword4">Password</label>
                <input ref="password" type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
              <div className="form-group form-check">   
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
              </div>
              <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-primary">Sign in</button>
            </form>
          </div> 
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
