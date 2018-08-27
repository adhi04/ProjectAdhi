import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {
  state = {
    redirect: false,
    status: '',
    username: '',
    password: ''
  }
  loginProcess = (e) => {
      var self = this;
      axios.post(`http://localhost:8005/userlogin`, {
          username: e.username.value,
          password: e.password.value
      }).then((response) => {
          var userdata = response.data
          if(userdata !== 0){
              cookies.set('userSession', userdata, {path: '/'});
              self.setState({
                  redirect: true
              });
          } else {
              self.setState({
                  status: 'Login gagal'
              })
          }
      });
  }
  renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
  }
  render() {
    return (
        <div>
            {this.renderRedirect()}
            <div className="content-wrapper" style={{fontSize: '18px'}}>
                <div className="login-box" style={{minHeight: '800px'}}>
                    <div className="login-logo">
                        <a href="#">
                        <b id="brand">Wise</b>Monkey</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form role="form">
                            <div className="form-group has-feedback">
                                <input className="form-control" placeholder="Username" type="text" ref="username" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input className="form-control" placeholder="Password" type="password" ref="password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <button type="button" onClick={() => {this.loginProcess(this.refs)}} className="btn btn-primary btn-block btn-flat"><i className="fa fa-paper-plane"></i> Login</button>
                                <Link to="/registration" className="btn btn-success btn-block">Daftar Anggota Baru</Link>
                            </div>
                        </form>
                    </div>
                    {/* /.login-box-body */}
                </div>
            </div>
        </div>
    )
  }
}
export default Login;