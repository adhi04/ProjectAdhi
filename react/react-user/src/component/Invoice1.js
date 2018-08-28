import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie'
import Header from './Header';
import Header2 from './Header2';

const cookies = new Cookies();


class Invoice extends Component {

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

  render() {

    let mycookie = cookies.get('sessionid');
        let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

        if(cookies.get('sessionid') === undefined) {
            return <Redirect to="/Login"/>
        }

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
          
            return <div className="row">
                <div className="col-md-6">
                  <address>
                    <strong>Billed To:</strong><br />
                    {namadepan} {namabelakang}<br />
                    {email}
                  </address>
                </div>
                <div className="col-md-6 text-right">
                  <address>
                    <strong>Shipped To:</strong><br />
                    {alamat}<br />
                    {kota}<br />
                    {negara}, {zip}
                  </address>
                </div>
            </div>
        })
        const hasil = this.state.dataproduk
        .map((isi, urutan) => 
            {   
                // var iduser= cookies.get('userSession');
                var urut = urutan + 1;
                var cartID = isi.cartID;
                var namaproduk = isi.nama_produk;
                var hargaproduk = isi.harga;
                var quantity = isi.quantity;
                // var totalharga = isi.total_price;
                var totalharga = isi.total_harga;
                console.log(totalharga)
             
                return <div>
                  <tr>
                          <td>{namaproduk}</td>
                          <td className="text-center" />
                          <td className="text-center">{quantity}</td>
                          <td className="text-right">{hargaproduk}</td>
                  </tr>
                  <tr>
                          <td className="thick-line" />
                          <td className="thick-line" />
                          <td className="thick-line text-center"><strong>Subtotal</strong></td>
                          <td className="thick-line text-right">Rp. {totalharga}</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Shipping</strong></td>
                          <td className="no-line text-right">Rp. 10.000</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Total</strong></td>
                          <td className="no-line text-right">Rp. {totalharga+10000}</td>
                        </tr>
                </div>
            })

    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="invoice-title">
                <br />
                <br />
                <br />
                <br />
                <h1 style={{color: 'brown'}}>Invoice</h1><h3 className="text-right">Order Id # hxs1234567</h3>
              </div>
              <hr />
              {/* <div className="row"> */}
                {/* <div className="col-md-6">
                  <address>
                    <strong>Billed To:</strong><br />
                    Alfi Sulistiani<br />
                    alfi123@gmail.com
                  </address>
                </div>
                <div className="col-md-6 text-right">
                  <address>
                    <strong>Shipped To:</strong><br />
                    Gang Asri No. 4 Rt 10/07 Kec. Makasar<br />
                    Jakarta Timur<br />
                    Indonesia, 13610
                  </address>
                </div> */}
                {datauser}
              {/* </div> */}
              <div className="row">
                <div className="col-md-6">
                  <address>
                    <strong>Payment Method:</strong><br />
                    <br />
                  </address>
                </div>
                <div className="col-md-6 text-right">
                  <address>
                    <strong>Order Date:</strong><br />
                    March 7th, 2018<br /><br />
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><strong>Order summary</strong></h3>
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-condensed">
                      <thead>
                        <tr>
                          <td><strong>Produk</strong></td>
                          <td className="text-center"><strong /></td>
                          <td className="text-center"><strong>Quantity</strong></td>
                          <td className="text-right"><strong>Price</strong></td>
                        </tr>
                      </thead>
                      <tbody>
                        {/* foreach ($order->lineItems as $line) or some such thing here */}
                        {/* <tr>
                          <td>Anjing Cihuahua</td>
                          <td className="text-center" />
                          <td className="text-center">1 Ekor</td>
                          <td className="text-right">Rp. 2.500.000</td>
                        </tr> */}
                        {/* <tr>
                          <td>Booking Test Rider</td>
                          <td className="text-center" />
                          <td className="text-center" />
                          <td className="text-right" />
                        </tr> */}
                        {hasil}
                        <tr>
                          <td className="thick-line" />
                          <td className="thick-line" />
                          <td className="thick-line text-center"><strong>Subtotal</strong></td>
                          <td className="thick-line text-right">Rp. 2.500.000</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Shipping</strong></td>
                          <td className="no-line text-right">Rp. 100.000</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Total</strong></td>
                          <td className="no-line text-right">Rp. 2.600.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </div>

    );
  }
}

export default Invoice;
