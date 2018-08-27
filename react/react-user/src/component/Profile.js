import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (

                <div className="container">
                  <center><h1>Profil Pengguna</h1></center>
                  <div className="row" style={{backgroundColor: 'antiquewhite'}}>
                    <div className="col-md-4">
                      <img src="http://via.placeholder.com/200x200" alt="Foto" />
                    </div>
                    <div className="col-md-8">
                      <p>Nama     : </p>
                      <p>Alfi Sulistiani</p>
                      <p>Alamat   : </p>
                      <p>Jalan Pasar Baru, Bekasi</p>
                      <p>TTL      : </p>
                      <p>10 Januari 1994</p>
                      <hr />
                      <a className="btn btn-primary" x href="editprof2.html" role="button">Edit</a>
                    </div>
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
              );
            }
          };
    

export default Profile;




