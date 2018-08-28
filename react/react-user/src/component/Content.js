import React, { Component } from 'react';
// import Prodetail from './Prodetail';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from './Header';
import Header2 from './Header2';

const cookies = new Cookies();
// import link from 'react-router-dom';

class Content extends Component {
    
  state={
    product :[],
    // Redirect: false,
    // LoginDulu: false
  }

  componentDidMount() {
    var self =this;
    axios.get('http://localhost:8002/newestproduct')
    .then((ambilData)=>{
      self.setState({product:ambilData.data,})
      console.log(this.state.product)
    })
   
  }

    render() {
      let mycookie = cookies.get('sessionid');
      let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

      const data =this.state.product.map((item, index)=>{
        var urut =index+1;
        var id=item.productID;
        // var jenis=item.id_jenis;
        var fotoproduk=item.foto_produk;
        var produk=item.nama_produk;
        var detail=item.detailproduk;
        var harga= item.harga;
        // var pembuat= item.pembuat;
        // var status =item.status;
        var posted = item.posted;
        return (
          // <div className="row">
          <div className="col-lg-4 col-md-6 mb-4" key={urut}>
          <div className="card h-100" style={{textAlign: "center"}}>
            <Link to="#"><img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${fotoproduk}`} style={{height: 190, width:250}} alt /></Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="detailprod.html">{produk}</Link>
              </h4>
              <h5>Rp {harga} </h5>
              <p className="card-text">{detail} </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        {/* </div> */}
        {/* <div key={urut} className="col">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${fotoproduk}`}  style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                <div className="card-body" >
                  <h5 className="card-title bg-light" style={{fontFamily:'serif',fontWeight: 'bold'}} >{produk}</h5>
                  <p className="card-text"> {detail}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">status</li>
                  <li className="list-group-item">Rp {harga}</li>
                  <li className="list-group-item">pembuat</li>
                </ul>
                <div className="card-body">
                
                  <Link to="/prodetail" className="card-link" className="btn btn-info">Lihat Detail</Link>&nbsp;&nbsp; */}
                  {/* <Link to={{pathname:'/cart', state:{dataID:id}}} className="card-link"> <i className="fa fa-shopping-cart">Tambah ke Daftar Belanja</i></Link> */}
                  {/* <button onClick ={()=>this.addtoCart(id)} className="card-link" className="btn btn-success"> <Link to ='/cart'><i className="fa fa-shopping-cart">Tambah ke Daftar Belanja</i></Link></button>
                </div>
              </div>
        </div> */}
        {/* &nbsp;
        &nbsp;
        &nbsp; */}
        
        
        </div>
        )
      }
    );

        return (
                  <div>
                    {navigation}
                    <div className="container">
                      
                      <div className="row">
                        <div className="col-lg-3">
                          <h1 className="my-4">MyPet</h1>
                          <div className="list-group">
                            <Link to="/productlist" className="list-group-item">Makanan Hewan</Link>
                            <Link to="/productlist" className="list-group-item">Drugs</Link>
                            <Link to="/productlist" className="list-group-item">Aksesoris</Link>
                          </div>
                        </div>
                       
                        <div className="col-lg-9">
                          <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" /> 
                              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active">
                                <img className="d-block img-fluid" src="img/jbt1.jpg" alt="First slide" style={{height: 350}} />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block img-fluid" src="img/jbt2.jpg" alt="Second slide" style={{height: 350}} />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block img-fluid" src="img/jbt3.jpg" alt="Third slide" style={{height: 350}} />
                              </div>
                            </div>
                            <Link to="#carouselExampleIndicators" className="carousel-control-prev"  role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true" />
                              <span className="sr-only">Previous</span>
                            </Link>
                            <Link to="#carouselExampleIndicators" className="carousel-control-next" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="sr-only">Next</span>
                            </Link>
                          </div>
                          <div style={{textAlign:"center"}} >
                            &nbsp;
                            <h1>New Products</h1>
                            &nbsp;
                          </div>
                          <div className="row">
                          {data}
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/cat1.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="detailprod.html">Kucing Persia</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/cat2.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="/prodetail">Kucing Pignose</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/cat3.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="/prodetail">Kucing Sphinx</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/dog.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="#">Anjing Kintamani</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/dog1.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="#">Anjing Bulldog</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <Link to="#"><img className="card-img-top" src="img/dog2.jpg" style={{height: 190}} alt /></Link>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <Link to="#">Anjing Cihuahua</Link>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        </div>
                        </div>
                  );
                }
              
          
        }
      
    

export default Content;
