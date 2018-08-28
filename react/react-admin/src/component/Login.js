import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends Component {

  state= {
    statusRedirect: false
  }
  
    fungsiLogin = (e) => {
      var self = this
     axios.post(`http://localhost:8002/adminlogin`, {
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
    if(this.state.statusRedirect) return <Redirect to="/homepage"/>
    return (

        <div className="page login-page">
        <div className="container d-flex align-items-center">
          <div className="form-holder has-shadow">
            <div className="row">
              {/* Logo & Information Panel*/}
              <div className="col-lg-6">
                <div className="info d-flex align-items-center">
                  <div className="content">
                    <div className="logo">
                      <h1>MyPet</h1>
                    </div>
                    <p>Selamat Datang Admin MyPet. Selamat bekerja. </p>
                  </div>
                </div>
              </div>
              {/* Form Panel    */}
              <div className="col-lg-6 bg-white">
                <div className="form d-flex align-items-center">
                  <div className="content">
                    <form method="post" className="form-validate">
                      <div className="form-group">
                        
                        <input id="login-username" type="text" ref="username" required data-msg="Please enter your username" placeholder="Username" className="input-material" />
                        {/* <label htmlFor="login-username" className="label-material">Username</label> */}
                      </div>
                      <div className="form-group">
                        <input id="login-password" type="password" ref="password" required data-msg="Please enter your password" placeholder="Password" className="input-material" />
                        {/* <label htmlFor="login-password" className="label-material">Password</label> */}
                      </div>
                        {/* <Link to="/" id="login"  className="btn btn-primary">Login</Link> */}
                        <button onClick={() => this.fungsiLogin(this.refs)} type="button" className="btn btn-primary">
                        LOGIN
                        </button>
                        {/* This should be submit button but I replaced it with <a> for demo purposes*/}
                    </form><Link to="#" className="forgot-pass">Forgot Password?</Link><br /><small>Do not have an account? </small><Link to="/register" className="signup">Signup</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>Design by <Link to="https://bootstrapious.com/admin-templates" className="external">Bootstrapious</Link>
            {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
