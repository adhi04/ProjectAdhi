import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class AllInv extends Component {
  render() {
    return (

        <div className="page">
        {/* Main Navbar*/}
        <Header />
        <div className="page-content d-flex align-items-stretch"> 
          {/* Side Navbar */}
          <Sidebar />
          <div className="content-inner">
            {/* Page Header*/}
            <header className="page-header">
              <div className="container-fluid">
                <h2 className="no-margin-bottom">Dashboard</h2>
              </div>
            </header>
            {/* Dashboard Counts Section*/}
            <section className="dashboard-counts no-padding-bottom">
              <div className="container-fluid">
                <div className="row bg-white has-shadow">
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-violet"><i className="icon-user" /></div>
                      <div className="title"><span>New<br />Clients</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '25%', height: 4}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-violet" />
                        </div>
                      </div>
                      <div className="number"><strong>25</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-red"><i className="icon-padnote" /></div>
                      <div className="title"><span>Work<br />Orders</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '70%', height: 4}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-red" />
                        </div>
                      </div>
                      <div className="number"><strong>70</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-green"><i className="icon-bill" /></div>
                      <div className="title"><span>New<br />Invoices</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '40%', height: 4}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-green" />
                        </div>
                      </div>
                      <div className="number"><strong>40</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-orange"><i className="icon-check" /></div>
                      <div className="title"><span>Open<br />Cases</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '50%', height: 4}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-orange" />
                        </div>
                      </div>
                      <div className="number"><strong>50</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dashboard Header Section    */}
            <section className="dashboard-header">
              <div className="container-fluid">
                <div className="row">
                  <form>
                    <div className="card" style={{marginTop: 50}}>
                      <div className="card-header">
                        <h4>All Invoices</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th>Invoice Number</th>
                                <th>Nama Produk</th>
                                <th>Costumer</th>                                                                                      
                                <th>tanggal</th>                                      
                                <th>Harga</th>                                      
                                <th>Status</th>                                      
                                <th>Setting</th>                                      
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">INV000001</th>
                                <td>Anjing Kintamani</td>
                                <td>Alfi</td>                                                
                                <td>06/06/2006</td>
                                <td>Rp. 2.500.000</td>
                                <td>Lunas</td>
                                <td><Link to="/editproduct" className="btn-sm btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                  <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">INV000002</th>                                                      
                                <td>Kucing Persia</td>
                                <td>Alfi</td>                                                      
                                <td>06/06/2006</td>
                                <td>Rp. 1.800.000</td>
                                <td>Lunas</td>
                                <td><Link to="/editproduct" className="btn-sm btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                  <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">INV000003</th>                                                      
                                <td>Kandang Ukuran Besar</td>
                                <td>Alfi</td>
                                <td>27/03/1999</td>
                                <td>Rp. 800.000</td>
                                <td>Lunas</td>
                                <td><Link to="/editproduct" className="btn-sm btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                  <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </form>            
                </div>
              </div>
            </section>
            {/* Page Footer*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AllInv;
