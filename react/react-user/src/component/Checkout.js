import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie'
import Header from './Header';
import Header2 from './Header2';

const cookies = new Cookies();



class Checkout extends Component {
  state = {
    dataproduk: [],
    redirect: false,
    iduser:'',
    datauser: [],
    total_harga:"",
    daftarBank: [],
    redirectInvoice: false
}

  componentDidMount(){
    var userID = cookies.get("sessionid")
    // console.log('user id cart= ' +userID)  
    axios.post(`http://localhost:8002/userdata`,{
        user_id: userID
      })
      .then((ambilData) => {
        if(ambilData.data != undefined){
              this.setState({ datauser: ambilData.data})
              ;}
        }
      )
    axios.post(`http://localhost:8002/showcart`,{
        user_id: userID
      })
      .then(
          /** Disini fungsi */
          (getData) => {
              console.log(getData.data);
              this.setState({
                dataproduk: getData.data,
              });
              var tampung= 0
              for(var i=0; i<getData.data.length; i++)
              {
               tampung +=  Number(getData.data[i].total_harga)
              }
              this.setState({total_harga:tampung})
          }
      )
      axios.get('http://localhost:8002/ambilDaftarBank').then((getData) => {
        this.setState({
          daftarBank: getData.data
        });
      })
  }

  sendToInvoice = (e) => {
    var firstname = e.firstName.value;
    var lastname = e.lastName.value;
    var username = e.username.value;
    var email = e.email.value;
    var adress = e.alamat.value;
    var negara = e.negara.value;
    var kota = e.kota.value;
    var zip = e.zip.value;
    var bank = e.bank.value;
    var listCart = this.state.dataproduk
  

    axios.post('http://localhost:8002/insertinvoice', {
      firstname:firstname,
      lastname :lastname,
      username :username,
      email :email,
      adress :adress,
      negara :negara,
      kota :kota,
      zip :zip,
      bank: bank,
      listCart: listCart
    }).then((response) =>{
      if (response.data === 1){
        this.setState({
          redirectInvoice: true
        })
      }
    })
  }
  


  render() {
    if(this.state.redirectInvoice){
      return <Redirect to="/invoice "/>
  }
      let mycookie = cookies.get('sessionid');
      let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

      // if(cookies.get('sessionid') === undefined) {
      //     return <Redirect to="/Login"/>
      // }

      // Logic dimulai disini
      // console.log(cookies.get("login") + " ini ada cookies login")

      // if(cookies.get("login")<"1" || cookies.get('login')=== undefined){
      //     {this.state.redirect= true}
      //     this.props.dispatch({type:'Login', kirim: "gagal bro palsu lu" })
      // }
      const daftarBank = this.state.daftarBank.map((isi, index) => {
        var idBank = isi.id;
        var namaBank = isi.nama_bank;
        var rekeningBank = isi.nomor_rekening;

        return <option value={namaBank}>{namaBank}</option>
      })
      // tidak berkaitan dgn yang di atas
      const hasil = this.state.dataproduk.map((isi, urutan) => 
          {   var iduser= cookies.get('userSession');
              var urut = urutan + 1;
              var cartID = isi.cartID;
              var namaproduk = isi.nama_produk;
              var hargaproduk = isi.harga;
              var quantity = isi.quantity;
              // var totalharga = isi.total_price;
              var totalharga = hargaproduk*quantity;
              
              
              return  <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{namaproduk}</h6>
                  {/* <small className="text-muted">Brief description</small> */}
                </div>
                <span className="text-muted"> {hargaproduk} </span>
              </li>              
            </ul>
          }
      );
    
      const datauser = this.state.datauser.map((isi, urutan) =>  {   
        
        // var cartID = isi.cartID;
        var namadepan = isi.nama_depan;
        var namabelakang = isi.nama_belakang;
        var username = isi.username;
        var email = isi.email;
        var alamat = isi.alamat;
        var kota = isi.kota;
        var negara = isi.negara;
        var zip = isi.zip;
        
          return <div>

            <form className="needs-validation" noValidate>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" ref="firstName" Value={namadepan} required />

                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" ref="lastName" Value={namabelakang} required />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username">Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" ref="username" Value={username} required />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                          <input type="email" className="form-control" ref="email" Value= {email} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address">Address</label>
                          <input type="text" className="form-control" ref="alamat" Value={alamat} required />
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" ref="negara" Value={negara} required />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" ref="kota" Value={kota} required />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" ref="zip" Value={zip} required />
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Transfer Option</h4>
                        <div className="d-block my-3">
                          <select className="form-control" ref="bank">
                            <label>Pilih Bank</label>
                              {daftarBank}
                          </select>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => this.sendToInvoice(this.refs)} >Continue to Invoice</button>
                      </form>

          </div> 
          });

    return (
                <div className="container">
                  <div className="py-5 text-center">
                  &nbsp;
                    {/* <img className="d-block mx-auto mb-4" src="./Checkout example for Bootstrap_files/bootstrap-solid.svg" alt width={72} height={72} /> */}
                    <h2>Checkout form</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                      </h4>
                      {hasil}
                      <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success"></span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$ {this.state.total_harga}</strong>
              </li>
                      <form className="card p-2">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Promo code" />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8 order-md-1">
                      <h4 className="mb-3">Shipping Address</h4>
                        {datauser}
                      <br />
                    </div>
                  </div>
                </div>
              );
            }
          };

export default Checkout;
