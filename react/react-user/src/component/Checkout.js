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
    total_harga:""
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
  }

  render() {

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
                            <input type="text" className="form-control" id="firstName" Value={namadepan} required />

                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" Value={namabelakang} required />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username">Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" Value={{username}} required />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                          <input type="email" className="form-control" id="email" Value= {email} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address">Address</label>
                          <input type="text" className="form-control" id="address" Value={alamat} required />
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" id="country" Value={negara} required />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" Value={kota} required />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" Value={zip} required />
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="same-address" />
                          <label className="custom-control-label" htmlFor="same-address">  Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="save-info" />
                          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                          <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder required />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder required />
                            <div className="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder required />
                            <div className="invalid-feedback">
                              Expiration date required
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder required />
                            <div className="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
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
                      <h4 className="mb-3">Billing address</h4>
                      {datauser}
                      {/* <form className="needs-validation" noValidate>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username">Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username" required />
                            <div className="invalid-feedback" style={{width: '100%'}}>
                              Your username is required.
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                          <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address">Address</label>
                          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="country">Country</label>
                            <select className="custom-select d-block w-100" id="country" required>
                              <option value>Choose...</option>
                              <option>United States</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <select className="custom-select d-block w-100" id="state" required>
                              <option value>Choose...</option>
                              <option>California</option>
                            </select>
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder required />
                            <div className="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="same-address" />
                          <label className="custom-control-label" htmlFor="same-address">  Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="save-info" />
                          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                          <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder required />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder required />
                            <div className="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder required />
                            <div className="invalid-feedback">
                              Expiration date required
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder required />
                            <div className="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                      </form> */}
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              );
            }
          };

export default Checkout;
