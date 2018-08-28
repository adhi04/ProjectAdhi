import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class Editproduk extends Component {

    state = {
        id: '',
        namaproduk: '',
        kategori: [],
        kategory: [],
        kategoriID: '',
        harga: '',
        detailproduk: '',
        foto: '',
    }
    
  //   2. untuk memunculkan data yang mengandung id yang dituju di database
    componentDidMount(){
        var id_sblm = this.props.location.state.produkID;
        axios.get('http://localhost:8002/getdata/'+id_sblm).then(
            (hasilAmbil) => {
            console.log(hasilAmbil.data);
            this.setState({
                id: hasilAmbil.data[0].productID,
                namaproduk: hasilAmbil.data[0].nama_produk,
                kategori: hasilAmbil.data[0].categoryID,
                harga: hasilAmbil.data[0].harga,
                detailproduk: hasilAmbil.data[0].detailproduk
            });
            
        }
        );

        axios.get('http://localhost:8002/AddCategory').then(
            (ambilData) => {
                // console.log(ambilData.data);
                console.log(ambilData.data[0]);
                console.log(ambilData.data[1]);
                this.setState({
                  kategory: ambilData.data,
                  // listukuran: ambilData.data[1]
                    
                });
            }
        )

    }
  //   3. dibagian input file (jika terjadi perubahan maka akan dijalankan fungsi 'onchange')
    onchange = (e) => {
      //  4. kenapa target name karena kita mengambil semua dari name yg di input file
      switch(e.target.name){
          case 'fotoproduk':
              this.setState({
                  // 5. kenapa pakai 0 karena json file kecuali pakai this map, kenapa pakai target?karena hanya mengambil satu input file
                  foto: e.target.files[0],
              });
              break;
      }
    }
  
  //   6. value kita dapat dari bawah, function buttonnya (submit). ketika di klik submitnya value akan di update
    value = (e) => {

      var kategoriID = e.kategori.value;
      var namaproduk = e.namaproduk.value;
      var hargaproduk = e.hargaproduk.value;
      var detailproduk = e.detailproduk.value;

      this.setState({
          kategoriID: kategoriID,
          namaproduk: namaproduk,
          hargaproduk: hargaproduk,
          detailproduk: detailproduk,
      })
    }
  
  // 8. kenapa ada prevent default biar tidak ada pengulangan submit dua kali
    updateData = (e) => {
      e.preventDefault();
      // 9. new form data seperti gudang/library. karena didalam form maka menggunakan append. kenapa menggunakan state karena state dia tas sudah diganti
      let formData = new FormData();
      formData.append('file', this.state.foto);
      formData.append('id', this.state.id);
      formData.append('namaproduk', this.state.namaproduk);
      formData.append('kategori', this.state.kategoriID);
      formData.append('harga', this.state.hargaproduk);
      formData.append('detailproduk', this.state.detailproduk);
  
      axios.post('http://localhost:8002/ubahData/', formData).then((hasil) => {
        var respon = hasil.data;
        console.log(respon) 
        if(respon === 1) 
        {
          this.setState({
            redirect: true
          })
        }
    })
    }

    handleChange = (e) => {
      this.setState({
        
          detailproduk: e.target.value,
         
      })
  
  }

  render() {

    if (this.state.redirect) return <Redirect to="/allproduct" />
    const kategori = this.state.kategory.map((item, index) => {
      
      var itemID = item.categoryID;
      var nameCategory = item.foodcategory; 
      return <option key={index} value={itemID}>{nameCategory}</option>
      
    })

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
                <div className=" bg-white has-shadow">

                    <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                <fieldset>
                    <legend>Edit Data</legend>
                    <hr/>
                    <input type="hidden" className="form-control" ref="idproduk" value={this.state.id}/>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Nama Produk</label>
                        <div className="col-lg-12">
                            <input ref="namaproduk" type="text" className="form-control" Value={this.state.namaproduk}  />
                        </div>
                    </div>

                    <div className="form-group">
                      <label className="col-lg-2 control-label">Category</label>
                      <div className="col-lg-12">
                      <select ref="kategori" className="form-control" id="category">
                        {kategori}
                      </select>
                      </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Harga</label>
                        <div className="col-lg-12">
                            <input ref="hargaproduk" type="text" className="form-control"  Value={this.state.harga} placeholder="Harga produk ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Deskripsi</label>
                        <div className="col-lg-12">
                            <textarea ref="detailproduk" type="text" className="form-control"  value={this.state.detailproduk} onChange={this.handleChange}></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Foto Produk</label>
                        <div className="col-lg-10">
                            <input name="fotoproduk" onChange={this.onchange} type="file" className="form-control-file"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                            <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>
                            {/* 1. kenapa button bawah gak dipake lagi (diganti) soalnya yg bawah hanya bisa mengambil value, tidak gambar */}
                            {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                        </div>
                    </div>

                </fieldset>
            </form>
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

export default Editproduk;
