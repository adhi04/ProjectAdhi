import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from './Header';
import Header2 from './Header2';

const cookies = new Cookies();


class Profile extends Component {
  state = {
    datauser:[],
    redirect: false
  }

  componentDidMount(){
    var id_user = cookies.get('sessionid');
    axios.post(`http://localhost:8002/showprofile/`,{
      user_id: id_user
    })
    .then((hasilAmbil) => {
        console.log(hasilAmbil.data);
        this.setState({
            datauser:hasilAmbil.data
        })   
    })
  }

  render() {

    let mycookie = cookies.get('sessionid');
    let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

    const datauser = this.state.datauser.map((isi, urutan) =>  {   
        var namadepan = isi.nama_depan;
        var namabelakang = isi.nama_belakang;
        var username = isi.username;
        var email = isi.email;
        var alamat = isi.alamat;
        var kota = isi.kota;
        var negara = isi.negara;
        var zip = isi.zip;
    return <div>
      <div className="col-md-8">
                      <p>Nama Depan    : </p>
                      <p>{namadepan}</p>
                      <p>Nama Belakang    : </p>
                      <p>{namabelakang}</p>
                      <p>Username    : </p>
                      <p>@{username}</p>
                      <p>Email    : </p>
                      <p>{email}</p>
                      <p>Alamat   : </p>
                      <p>{alamat}</p>
                      <p>Kota   : </p>
                      <p>{kota}</p>
                      <p>Negara   : </p>
                      <p>{negara}</p>
                      <p>ZIP      : </p>
                      <p>{zip}</p>
                      <hr />
                      <a className="btn btn-primary" x href="editprof2.html" role="button">Edit</a>
                    </div>
    </div>
    })
    return (
                <div>
                  {navigation}
                <div className="container">
                  <center><h1>Profil Pengguna</h1></center>
                  <div className="row" style={{backgroundColor: 'antiquewhite'}}>
                    <div className="col-md-4" style={{textAlign:"center", padding:30}} >
                      <img src="/img/cat.jpg" alt="Foto" />
                    </div>
                    {/* <div className="col-md-8">
                      <p>Nama     : </p>
                      <p>Alfi Sulistiani</p>
                      <p>Alamat   : </p>
                      <p>Jalan Pasar Baru, Bekasi</p>
                      <p>TTL      : </p>
                      <p>10 Januari 1994</p>
                      <hr />
                      <a className="btn btn-primary" x href="editprof2.html" role="button">Edit</a>
                    </div> */}
                    {datauser}
                  </div>
                  <br />
                  <br />
                  <center><h2>Transaction History</h2></center>
                  <br />
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Invoice Number</th>
                        <th scope="col">Product</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Harga</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">INV0000001</th>
                        <td>Pedegree</td>
                        <td>04/06/2018</td>
                        <td>Rp. 5.600.000</td>
                        <td><a className="btn btn-primary" x href="invoice1.html" role="button">Detail</a></td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">INV0000002</th>
                        <td>Anjing Cihuahua</td>
                        <td>04/06/2018</td>
                        <td>Rp. 2.500.000</td>
                        <td><a className="btn btn-primary" x href="editprof2.html" role="button">Detail</a></td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">INV0000003</th>
                        <td>Kandang Ukuran Besar</td>
                        <td>04/06/2018</td>
                        <td>Rp. 3.600.000</td>
                        <td><a className="btn btn-primary" x href="editprof2.html" role="button">Detail</a></td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              );
            }
          };
    

export default Profile;




