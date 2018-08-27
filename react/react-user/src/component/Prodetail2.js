import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Prodetail extends Component {

  state = {
    // produkID: '',
    // namaproduk: '',
    // kategori: [],
    // kategoriID: '',
    // harga: '',
    // detailproduk: '',
    // foto: '',
    product: []
}

  componentDidMount(){
    var id_sblm = this.props.location.state.produkID;
    var self = this
    axios.get('http://localhost:8002/getdata/'+id_sblm)
    .then(
        (hasilAmbil) => {
        console.log(hasilAmbil);

        self.setState({
            // id: hasilAmbil.data[0].productID,
            // namaproduk: hasilAmbil.data[0].nama_produk,
            // // kategori: hasilAmbil.data[0].categoryID,
            // harga: hasilAmbil.data[0].harga,
            // detailproduk: hasilAmbil.data[0].detailproduk
            product: hasilAmbil.data
        });   
    });
  }
  render() {
    const produk = this.state.product.map((item, index) => {
      
      // var produkID = item.productID;
      var namaproduk = item.nama_produk;
      // var kategori = item.categoryID;
      var harga = item.harga;
      var detailproduk = item.detailproduk;
      var foto = item.foto_produk;
      var produkID= item.productID
      return ( 
      <div className="container" id="product-section">
        <br /><br /><br />
        <div className="row">
          <div className="col-md-6">
            <img src={'http://localhost:8002/'+ `tampunganFile/${foto}`} style={{height: 300, width: 300}} alt="Kucing" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>{namaproduk}</h2>
                <h4 className="price">Harga: <span>Rp. {harga}</span></h4>
              </div>
              <div className="col-md-12">
                <Link to={{pathname:'/cart', state: {produkID: produkID}}} className="flex-c-m md bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                Add to Cart
                </Link>
              </div>
            </div>
            <br />
            <p> {detailproduk} </p>
          </div>
        </div>
        <br /><br />
        </div>
      )
      // return <option key={index} value={itemID}>{nameCategory}</option>
    })
    
    return (
        <div>
          {produk}
        </div>
          

    );
  }
}

export default Prodetail;
