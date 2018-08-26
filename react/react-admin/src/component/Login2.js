import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
            
          <div className="row" style={{marginTop: 150}}>
  <div className="col-md-4" />
  <div className="col-md-4" style={{textAlign: 'center'}}>
    <div>
      <h1>ADMIN Login</h1>
    </div>
    <form>
    <div className="form-group" style={{marginTop: 50}}>
      <label htmlFor="exampleInputEmail1">Username</label>
      <input ref="username" type="text" className="form-control"  placeholder="Username" />
      <small className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input ref="password" type="password" className="form-control" placeholder="Password" />
    </div>
    <button onClick={() => this.fungsiLogin(this.refs)} type="button" className="btn btn-primary">
      LOGIN
    </button>
    </form>
  </div>
  <div className="col-md-4" />
</div>
        );
    }
}
export default Login;