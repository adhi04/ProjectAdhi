import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class EditProduct extends Component {
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
                <div className="content-wrapper">
                  <div className="container-fluid">
                    {/* Breadcrumbs*/}
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 ">
                        </div>
                        <div className="col-lg-6">
                          <form>
                            <div className="card" style={{marginTop: 50, width: 600}}>
                            <br />
                              <center><h3 className="text-danger">Form Edit Produk</h3></center>
                              <hr />
                              <div className="form-group row">
                                <label className="col-sm-2 form-control-label">Nama Produk</label>
                                <div className="col-sm-10">
                                  <input type="text" placeholder="Nama" className="form-control" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 form-control-label">Kategori</label>
                                <div className="col-sm-10">
                                  <input type="text" placeholder="Kategori" className="form-control" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 form-control-label">Upload Gambar</label>
                                <div className="col-sm-10">
                                  <input type="file" placeholder="Gambar" className="form-control" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 form-control-label">Harga</label>
                                <div className="col-sm-10">
                                  <input type="number" placeholder="Harga" className="form-control" />
                                </div>
                              </div>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">Deskripsi</span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                              </div><br />
                              <div className="card-body text-center">
                                <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary">Save</button>
                                <button type="button" data-toggle="modal" ref="#myModal" className="btn btn-danger">Delete</button>
                                {/* Modal*/}
                                <div id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade text-left">
                                  <div role="document" className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 id="exampleModalLabel" className="modal-title">Simpan Semua Input Form</h5>
                                        <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                                      </div>
                                      <div className="modal-body">
                                        <p>Apakah Anda Yakin Ingin Menyimpanya?</p>
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" data-dismiss="modal" className="btn btn-secondary">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form></div>
                      </div></div></div></div></div></section>
            {/* Page Footer*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditProduct;
