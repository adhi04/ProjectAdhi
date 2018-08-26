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
        axios.get(`http://localhost:8002/`).then(
            /** Disini fungsi */
            (ambilData) => {
                // console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });
            }
        )
    }


    deleteData = (e) => {
      axios.post(`http://localhost:8002/DeleteData`, {
          inputSatu: e,
        }).then(
          (ambilData) => {
              console.log(ambilData.data);
              if (ambilData.data === 1) {
                axios.get(`http://localhost:8002/`).then(
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
              // console.log(e)
          }

  render() {
    if(cookies.get('sessionid') === undefined) return <Redirect to="/Login"/>
    const hasil = this.state.dataproduk.map(
      (isi, urutan) => {
          var urut = urutan + 1;
          var produkID = isi.productID;
          var namaproduk = isi.nama_produk;
          // var kategori = isi.categoryID;
          var kategori = isi.foodcategory;
          var hargaproduk = isi.harga;
          var detail = isi.detailproduk;
          var fotoproduk = isi.foto_produk;
           
          return <tr key={urutan} style={{textAlign: 'center'}}>
          <td>{urut}</td>
          <td>{namaproduk}</td>
          <td>{kategori}</td>
          <td>{hargaproduk}</td>
          <td>{detail}</td>
          <td>{fotoproduk}</td>
          <td>
              {/* kenapa link to gak pake kutip aja soalnya kita mau ambil nilai yang sifatnya dinamis */}
              <Link to={{pathname:'/editdata/', state: {produkID: produkID}}} className="btn btn-warning btn-md">Edit</Link>&nbsp;
              <button type="button" onClick={() => this.deleteData(produkID)} className="btn btn-danger btn-md">Delete</button>
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
              <Link to="/tambahdata" className="btn btn-primary btn-m">Add Product</Link>
              </div>
              <div className="row bg-white has-shadow">
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                      <tr className="table-striped table-secondary" >
                          <th style={{textAlign: 'center'}}>Nomor</th>
                          <th style={{textAlign: 'center'}}>Nama Produk</th>
                          <th style={{textAlign: 'center'}}>Kategori Makanan</th>
                          <th style={{textAlign: 'center'}}>Harga Produk</th>
                          <th style={{textAlign: 'center'}}>Deskripsi Produk</th>
                          <th style={{textAlign: 'center'}}>Foto Produk</th>
                          <th style={{textAlign: 'center'}}>Actions </th>
                      </tr>
                  </thead>
                  <tbody>
                      {hasil}
                  </tbody>
                  </table>
                        
              </div>
                {/* <div className="row">
                  <div className="col-md-3">                                                
                    <div className="container-fluid sticky-top form-inline">
                      <form className="form-inline">
                        <button className="btn btn-outline-success col-sm-4" type="submit">Search</button>
                        <input className="form-control col-sm-8" type="search" placeholder="Cari Product" aria-label="Search" />
                      </form>
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div data-spy="scroll" data-target="#navbar-example3" data-offset={0}>
                      <h4 id="item-1">
                        Anjing
                      </h4>
                      <hr />
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/lambretta scooter.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/Old_military_BSA_motorcycle,_C5554828,_pic1.JPG" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/MemorableMotorcycleBSAM2011.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                      <h4 id="item-1-1">
                        Kucing
                      </h4>
                      <hr />
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/Royal-Enfield-by-Bulleteer-5.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/Modified-Royal-Enfield-Thunderbird-350-Spartan-Images-1.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/MY18-Bobber-road-sideview-LB.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/royalenfeld2.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                      <h4 id="item-1-2">
                        Burung
                      </h4>
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/main-banner.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/BSA-1960-brochure.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/main-banner.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                      <h4 id="item-2">
                        Hewan Lainnya
                      </h4>
                      <hr />
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                      <h4 id="item-3">
                        Kandang
                      </h4>
                      <hr />
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/MotoB-Side-copy.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/motoguzzi-850t-caferacer-4.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/custom-triumph.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/building-a-cafe-racer-triumph.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                      <h4 id="item-3-1">
                        Pet Food
                      </h4>
                      <hr />
                      <div className="card-group">
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/indian_scout_ftr1200_street_tracker_01.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/05-honda-africa-twin-2017.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '12rem'}}>
                          <img className="card-img-top" src="Image/Snow-Male.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>&nbsp;
                        <div className="card" style={{width: '10rem'}}>
                          <img className="card-img-top" src="Image/trackerHD.jpg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example .</p>
                            <a href="#" className="btn btn-outline-success">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
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
