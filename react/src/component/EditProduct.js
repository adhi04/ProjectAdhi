import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios'
import {Link} from 'react-router-dom';

class EditProduct extends Component {

  state= {
    id: '',
    namaproduk:'',
    harga: ''
  }

componentDidMount(){
    var id = this.props.location.state.produkID;
    axios
        .get('http://localhost:8000/editdata/'+id)
        .then((hasilAmbil) => {
            console.log(hasilAmbil);
            this.setState({
                idproduk: hasilAmbil.data[0].id,
                namaproduk: hasilAmbil.data[0].nama_produk,
                hargaproduk: hasilAmbil.data[0].harga
            })
        })
    }
    updateData = (e) =>{
        axios.post('http://localhost:8000/ubahData/', {
            id: e.idproduk.value,
            namaproduk:e.namaproduk.value,
            harga: e.hargaproduk.value
        })
    }

  render() {
    return (
        <div className="container">
          <form className="form-horizontal">
              <fieldset>
                  <legend>Edit Data</legend>
                  <input type= "hidden" className="form-control" ref = 'idproduk' defaultValue={this.state.id}/>
                  <div className="form-group">
                      <label className="col-lg-2 control-label">Nama Produk</label>
                      <div className="col-lg-10">
                          <input ref="namaproduk" type="text" className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..." />
                      </div>
                  </div>
  
                  <div className="form-group">
                      <label className="col-lg-2 control-label">Harga</label>
                      <div className="col-lg-10">
                          <input ref="hargaproduk" type="text" className="form-control" defaultValue={this.state.harga} placeholder="Harga produk ..." />
                      </div>
                  </div>
  
                  <div className="form-group">
                      <div className="col-lg-10 col-lg-offset-2">
                          <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                          <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary">Submit</button>
                      </div>
                  </div>
  
                  {/* <div className="form-group">
                      <div className="col-lg-10 col-lg-offset-2">
                          <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                          <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-primary">Submit</button>
                      </div>
                  </div> */}
  
              </fieldset>
          </form>
        </div>
      )
    }
  }
  export default EditProduct;
  