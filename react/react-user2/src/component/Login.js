import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
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
                      <h1>Dashboard</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              {/* Form Panel    */}
              <div className="col-lg-6 bg-white">
                <div className="form d-flex align-items-center">
                  <div className="content">
                    <form method="post" className="form-validate">
                      <div className="form-group">
                        
                        <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" placeholder="Username" className="input-material" />
                        {/* <label htmlFor="login-username" className="label-material">Username</label> */}
                      </div>
                      <div className="form-group">
                        <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" placeholder="Password" className="input-material" />
                        {/* <label htmlFor="login-password" className="label-material">Password</label> */}
                      </div><Link to="/" id="login"  className="btn btn-primary">Login</Link>
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
