import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from './Header';
import Header2 from './Header2';

const cookies = new Cookies();

class Productlist extends Component {
  state={
    product :[],
    produkID :'',
    // Redirect: false,
    // LoginDulu: false
  }

  componentDidMount() {
    var self =this;
    axios.get('http://localhost:8002/')
    .then((ambilData)=>{
      self.setState({product:ambilData.data,})
      console.log(this.state.product)
    })
   
  }

  buy(produk,harga){
    var namaproduk = produk
    var harga = harga
    var user_id = cookies.get("sessionid")
    console.log(namaproduk) 
    console.log(harga)
    console.log(user_id)
    
    axios.post('http://localhost:8002/insertcart', 
    {
        namaproduk:namaproduk,
        harga:harga,
        user_id: user_id
    })
    // .then((response)=>{
    //     if(response.data === "berhasil"){
    //         this.setState({nextpage:true})
    //     }
    // })
  }
  render() {

    let mycookie = cookies.get('sessionid');
    let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

    const data =this.state.product.map((item, index)=>{
      // var urut =index+1;
      var produkID=item.productID;
      // var jenis=item.id_jenis;
      var fotoproduk=item.foto_produk;
      var produk=item.nama_produk;
      // var detail=item.detailproduk;
      var harga= item.harga;
      // var pembuat= item.pembuat;
      // var status =item.status;
      var posted = item.posted;
      return (
        

        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                     <Link to={{pathname:'/prodetail', state: {produkID: produkID}}} > <img src="images/item-02.jpg" src={'http://localhost:8002/'+ `tampunganFile/${fotoproduk}`} alt="IMG-PRODUCT" style={{minHeight: 340, maxHeight: 340}} /></Link>
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button onClick={()=>this.buy(produk,harga)} className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"> Add to Cart</button>
                          {/* <Link to={{pathname:'/cart', state: {produkID: produkID}}}  className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <Link to={{pathname:'/prodetail', state: {produkID: produkID}}} className="block2-name dis-block s-text3 p-b-5">
                        {produk}
                      </Link>
                      <span className="block2-price m-text6 p-r-5">
                        Rp. {harga}
                      </span>
                      <input type="hidden" className="form-control" ref="idproduk" value={this.state.produkID}/>
                    </div>
                  </div>
                </div>
         )
        }
      );
    return (
      <div >
        {navigation}
        <section className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
              <div className="leftbar p-r-20 p-r-0-sm">
                {/*  */}
                <h4 className="m-text14 p-b-7">
                  Categories
                </h4>
                <ul className="p-b-54">
                  <li className="p-t-4">
                    <a href="#" className="s-text13 active1">
                      All
                    </a>
                  </li>
                  <li className="p-t-4">
                    <a href="#" className="s-text13">
                      Anjing
                    </a>
                  </li>
                  <li className="p-t-4">
                    <a href="#" className="s-text13">
                      Kucing
                    </a>
                  </li>
                  <li className="p-t-4">
                    <a href="#" className="s-text13">
                      Hewan lainnya
                    </a>
                  </li>
                  <li className="p-t-4">
                    <a href="#" className="s-text13">
                      Aksesoris
                    </a>
                  </li>
                </ul>
                {/*  */}
                <h4 className="m-text14 p-b-32">
                  Filter
                </h4>
                <div className="filter-price p-t-22 p-b-50 bo3">
                  <div className="m-text15 p-b-17">
                    Harga
                  </div>
                  <div className="wra-filter-bar">
                    <div id="filter-bar" />
                  </div>
                  <div className="flex-sb-m flex-w p-t-16">
                    <div className="w-size11">
                      {/* Button */}
                      <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                        Filter
                      </button>
                    </div>
                    <div className="s-text3 p-t-10 p-b-10">
                      Range: $<span id="value-lower">610</span> - $<span id="value-upper">980</span>
                    </div>
                  </div>
                </div>
                <div className="search-product pos-relative bo4 of-hidden">
                  <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />
                  <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                    <i className="fs-12 fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
              {/*  */}
              <div className="flex-sb-m flex-w p-b-35">
                <div className="flex-w">
                  <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                    <select className="selection-2" name="sorting">
                      <option>Default Sorting</option>
                      <option>Popularity</option>
                      <option>Price: low to high</option>
                      <option>Price: high to low</option>
                    </select>
                  </div>
                  <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                    <select className="selection-2" name="sorting">
                      <option>Harga</option>
                      <option>$0.00 - $50.00</option>
                      <option>$50.00 - $100.00</option>
                      <option>$100.00 - $150.00</option>
                      <option>$150.00 - $200.00</option>
                      <option>$200.00+</option>
                    </select>
                  </div>
                </div>
                <span className="s-text8 p-t-5 p-b-5">
                  Showing 1–12 of 16 results
                </span>
              </div>
              <div className="row">
              {data}
              </div>
              {/* Product */}
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="images/item-02.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Anjing Cihuahua
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $75.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-03.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Anjing Kintamani
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $92.50
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-05.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Anjing Bulldog
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $165.90
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                      <img src="images/item-07.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Kucing Persia
                      </a>
                      <span className="block2-oldprice m-text7 p-r-5">
                        $29.50
                      </span>
                      <span className="block2-newprice m-text8 p-r-5">
                        $15.90
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="images/item-01.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Kucing Munchkin
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $75.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-14.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Kucing Russian Blue
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $92.50
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="images/item-06.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Tokek
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $75.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-08.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Sugar Glider
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $92.50
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Lovebird
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $165.90
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                      <img src="images/item-11.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Kandang Ukuran Besar
                      </a>
                      <span className="block2-oldprice m-text7 p-r-5">
                        $29.50
                      </span>
                      <span className="block2-newprice m-text8 p-r-5">
                        $15.90
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="images/item-12.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Kandang Ukuran Sedang
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $75.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="images/item-15.jpg" alt="IMG-PRODUCT" />
                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                        </a>
                        <div className="block2-btn-addcart w-size1 trans-0-4">
                          {/* Button */}
                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Glodok Burung Lovebird
                      </a>
                      <span className="block2-price m-text6 p-r-5">
                        $92.50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <div className="pagination flex-m flex-w p-t-26">
                <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Productlist
