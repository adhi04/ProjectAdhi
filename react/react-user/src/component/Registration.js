import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class Registration extends Component {

  state = {
    redirect: false
  }

  value = (e) => {
    axios.post('http://localhost:8002/registration/',{
    namadepan: e.namadepan.value,
    namabelakang: e.namabelakang.value,
    username: e.username.value,
    password: e.password.value,
    email: e.email.value,
    alamat: e.alamat.value,
    birthday: e.birthday.value,
    kota: e.kota.value,
    negara: e.negara.value,
    zip: e.zip.value,
  })
    // axios.post('http://localhost:8002/registration/')
    .then((hasil) => {
      var respon = hasil.data;
      console.log(hasil.data) 
      if(respon == '1') 
      {
        this.setState({
          redirect: true
        })
      }
    })
  }

   

  render() {

    if (this.state.redirect) return <Redirect to="/" />


    return (
      
            <div className="container py-5">
              <div>
                <center> <h1>Registration Form <br /><br /></h1> </center>
              </div>
              <form onSubmit={this.tambahData} encType="multipart/form-data">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFrontName">Nama Depan </label>
                    <input ref="namadepan" type="text" className="form-control" id="inputFrontName" placeholder="Nama Depan" />
                    {/* <label for="inputEmail4">Nama Depan </label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"> */}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastname">Nama Belakang</label>
                    <input ref="namabelakang" type="text" className="form-control" id="inputLastName" placeholder="Nama Belakang" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input ref="username" type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastname">Password</label>
                    <input ref="password" type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email </label>
                    <input ref="email" type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Alamat</label>
                  <input ref="alamat" type="text" className="form-control" id="inputAddress" placeholder="Alamat" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTglLahir">Tanggal Lahir</label>
                  <input ref="birthday" type="date" className="form-control" id="inputTglLahir" placeholder="DD-MM-YYYY" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Kota</label>
                    <input ref="kota" type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Negara</label>
                    <input ref="negara" type="text" className="form-control" id="negara" />
                    {/* <select id="inputState" className="form-control">
                      <option selected>Pilih Negara</option>
                      <option>...</option>
                    </select> */}
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input ref="zip" type="number" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Register</button>
              </form>
            </div>
          );
        }
      };
    

export default Registration;
