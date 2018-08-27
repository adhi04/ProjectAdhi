import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Prodetail extends Component {

  state = {
    // produkID: '',
    // namaproduk: '',
    // kategori: [],
    // kategoriID: '',
    // harga: '',
    // detailproduk: '',
    // foto: '',
    product: [],
    redirect: false,
    nextpage: false,
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

  buy(namaproduk,harga){
    var namaproduk = namaproduk
    var harga = harga
    var user_id = cookies.get("login")
    console.log(namaproduk)
    console.log(harga)
    console.log(user_id)
    
    axios.post('http://localhost:8002/updatecart', 
    {
        namaproduk:namaproduk,
        harga:harga,
        user_id: user_id
    })
    .then((response)=>{
        if(response.data === "berhasil"){
            this.setState({nextpage:true})
        }
    })
  }

  render() {

    if(cookies.get('login')<"1" || cookies.get('login')=== undefined)
            {
                {this.state.redirect= true}
                this.props.dispatch({type:'Login', kirim: "gagal bro palsu lu" })
            }

        if(this.state.nextpage){
            return <Redirect to="/cart" />
        }

        if(this.state.redirect){
            return <Redirect to="/"/>
        }

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
                <Link to={{pathname:'/cart', state: {produkID: produkID, namaproduk: namaproduk}}} className="flex-c-m md bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                Add to Cart
                </Link>
                <button onClick={()=>this.buy(namaproduk,harga)} className="btn btn-success btn-md"><i className="fa fa-trash"></i> Buy</button>
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
        <div style={{minHeight:470}} >
          {produk}
        </div>
          

    );
  }
}

export default Prodetail;
