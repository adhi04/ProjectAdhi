import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class AddCategory extends Component {
  render() {
    return (
        <div className="page">
        {/* Main Navbar*/}
        <Header/>
        
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

            <section className="dashboard-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 ">
                  </div>
                  <div className="col-lg-7">
                    <form>
                      <div className="card" style={{marginTop: 50}}>
                        <br />
                        <center><h3 className="text-danger">Form Tambah Kategori</h3></center>
                        <hr />
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">ID</label>
                          <div className="col-sm-10">
                            <input type="text" placeholder="ID" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 form-control-label">Kategori</label>
                          <div className="col-sm-10">
                            <input type="text" placeholder="Kategori" className="form-control" />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Deskripsi</span>
                          </div>
                          <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                        </div><br />
                        <div className="card-body text-center">
                          <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary">Add</button>
                          <button type="button" data-toggle="modal" ref="#myModal" className="btn btn-danger">Delete</button>
                         
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
                    </form>
                  </div>
                  <div className="col-lg-3" />
                </div>
              </div>
            </section>
            {/* Page Footer*/}
            
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AddCategory;


