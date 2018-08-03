import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class EditInv extends Component {
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
                <div className="col-lg-3 ">
                  </div>
                  <div className="col-lg-7">
                  <center><form>
                  <div className="card" style={{marginTop: 50}}>
                    <h3>Tambah Invoice</h3><br />
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Invoice ID</span>
                      </div>
                      <input type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tanggal Dibuat</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tanggal Dikirim</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tanggal diterima</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tanggal Dibuat</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Status</span>
                      </div>
                      <div className="dropdown">
                        <input type="text" className="form-control dropdown-toggle" data-toggle="dropdown" />                           
                        <div className="dropdown">
                          <a className="dropdown-item">New</a>
                          <a className="dropdown-item">Complete</a>                            
                        </div>
                      </div>
                    </div><br />
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Alamat</span>
                      </div><br />
                      <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <button type="submit" className="btn btn-outline-success">Simpan</button>
                    <button type="submit" className="btn btn-danger">Cancel</button><br /><br />
                  </div>
                  </form></center> 
                  </div>           
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

export default EditInv;
