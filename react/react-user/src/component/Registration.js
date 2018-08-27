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
      console.log(respon) 
      if(respon === 1) 
      {
        this.setState({
          redirect: true
        })
      }
    })
  }

    // var kategoriID = e.kategori.value;
    // var namaproduk = e.namaproduk.value;
    // var hargaproduk = e.hargaproduk.value;
    // var detailproduk = e.detailproduk.value;
  

          // this.setState({
          //   namadepan: namadepan,
          //   namabelakang: namabelakang,
          //   username: username,
          //   password: password,
          //   email: email,
          //   alamat: alamat,
          //   birthday: birthday,
          //   kota: kota,
          //   negara: negara,
          //   zip: zip,
          //   // kategoriID: kategoriID,
          //   // namaproduk: namaproduk,
          //   // hargaproduk: hargaproduk,
          //   // detailproduk: detailproduk
          // }) 
        // }

  // registration = (e) => {
  //   e.preventDefault();
  //   // 9. new form data seperti gudang/library. karena didalam form maka menggunakan append. kenapa menggunakan state karena state dia tas sudah diganti
  //   let formData = new FormData();
  //   // formData.append('file', this.state.foto);
  //   // formData.append('namaproduk', this.state.namaproduk);
  //   // formData.append('kategori', this.state.kategoriID);
  //   // formData.append('harga', this.state.hargaproduk);
  //   // formData.append('detailproduk', this.state.detailproduk);
  //   // console.log (detailproduk)
  //   formData.append('namadepan', this.state.namadepan)
  //   formData.append('namabelakang', this.state.namabelakang)
  //   formData.append('username', this.state.username)
  //   formData.append('password', this.state.password)
  //   formData.append('email', this.state.email)
  //   formData.append('alamat', this.state.alamat)
  //   formData.append('birthday', this.state.birthday)
  //   formData.append('kota', this.state.kota)
  //   formData.append('negara', this.state.negara)
  //   formData.append('zip', this.state.zip)
  //   axios.post('http://localhost:8002/registration/', formData)
  //   .then((hasil) => {
  //     var respon = hasil.data;
  //     console.log(respon) 
  //     if(respon === 1) 
  //     {
  //       this.setState({
  //         redirect: true
  //       })
  //     }
  //   })
  // }

  render() {

    if (this.state.redirect) return <Redirect to="/allproduct" />


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
                <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Sign in</button>
              </form>
            </div>
          );
        }
      };
    

export default Registration;
