import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
// import { connect } from 'react-redux';
const cookies = new Cookies()

class AllProduct extends Component {

    state = {
        dataproduk: [],
        redirect: false
    }
    componentDidMount(){
        axios.get(`http://localhost:8002/AddCategory`).then(
            /** Disini fungsi */
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });
            }
        )
    }

    deleteCat = (e) => {
      axios.post(`http://localhost:8002/DeleteCat`, {
          inputCat: e,
        }).then(
          (ambilData) => {
              console.log(ambilData.data);
              if (ambilData.data === 1) {
                axios.get(`http://localhost:8002/AddCategory`).then(
            /** Disini fungsi */
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });
            }
        )
              }
            })
              console.log(e)
          }


  render() {
    if(cookies.get('sessionid') === undefined) return <Redirect to="/Login"/>
    const hasil = this.state.dataproduk.map(
      (isi, urutan) => {
          var urut = urutan + 1;
          var catID = isi.categoryID;
          var namakat = isi.foodcategory;
          // console.log(catID)
           
          return <tr key={urutan} style={{textAlign: 'center'}}>
          <td>{urut}</td>
          <td>{namakat}</td>
          <td>
              {/* kenapa link to gak pake kutip aja soalnya kita mau ambil nilai yang sifatnya dinamis, fungsi pathname untuk mengirim state ke child */}
              <Link to={{pathname:'/editkat/', state: {catID: catID, namakat:namakat}}} className="btn btn-warning btn-md">Edit</Link>&nbsp;
              <button type="button" onClick={() => this.deleteCat(catID)} className="btn btn-danger btn-md">Delete</button>
          </td>
      </tr>
      }
    );

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
              <div style={{textAlign:'center', padding: 20}}>
              <Link to="/addcat" className="btn btn-primary btn-m">Add Category</Link>
              </div>
              <div className="row bg-white has-shadow">

                <table className="table table-striped table-hover table-bordered">
                  <thead>
                      <tr className="table-striped table-secondary" >
                          <th style={{textAlign: 'center'}}>Nomor</th>
                          <th style={{textAlign: 'center'}}>Kategori</th>
                          <th style={{textAlign: 'center'}}>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {hasil}
                  </tbody>
                  </table>
                        
              </div>
               
              </div></section>
            {/* Page Footer*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AllProduct;
