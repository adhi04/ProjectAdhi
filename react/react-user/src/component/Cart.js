import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import Header from './Header';
import Header2 from './Header2';

///// cookies start////
const cookies = new Cookies();
////// Cookies////////////


// function mapStateToProps(state){
//     return {
//      login: state.hasil_login
//     };
// }

class cart extends Component {
  state = {
      dataproduk: [],
      redirect: false,
      iduser:'',
  }
  componentDidMount(){
    var userID = cookies.get("sessionid")
    console.log('user id cart= ' +userID)  
    axios.post(`http://localhost:8002/showcart`,{
        user_id: userID
      })
      .then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                  dataproduk: ambilData.data,
                  iduser:cookies.get("sessionid")
              });
          }
      )
  }

  deleteCart = (e) =>{
      axios.post('http://localhost:8002/deleteCart',{
          cartID:e
      })
      
      .then ((hasil) => {
          var del = hasil.data
          if (del ===1){
            var userID = cookies.get("sessionid")
            console.log('user id cart= ' +userID)  
            axios.post(`http://localhost:8002/showcart`,{
                user_id: userID
              })
              .then(
                  /** Disini fungsi */
                  (ambilData) => {
                      console.log(ambilData.data);
                      this.setState({
                          dataproduk: ambilData.data,
                          
                      });
                  }
              )
          }
        
      })
    
      }
      
      checkout(e){
        // var namaproduk = namaproduk
        // var harga = hargaproduk
        // var user_id = cookies.get("sessionid")
        var userid = e
        // console.log(namaproduk)
        // console.log(harga)
        console.log(e)
        
        axios.post('http://localhost:8002/updatecheckout', 
        {
            // namaproduk:namaproduk,
            // harga:harga,
            userid: userid
            
        })
        .then((response)=>{
            if(response.data === "berhasil"){
                this.setState({nextpage:true})
            }
        })
      }
//   deleteCart = (value) => {
//     axios.post('http://localhost:8002/deleteCart', {
//       cartID: value
//     }).then((response) => {
//       if(response){
//         var userID = cookies.get('sessionid');
//         axios.post('http://localhost:8002/showcart', {
//           userID: userID
//         }).then((res) => {
//           var cartData = res.data[0];
//           var subPrice = res.data[1];

//           this.setState({
//             detailCart: cartData,
//             totalPerItem: subPrice,
//           });
//           var totalPrice = 0;
//           var listPrice = this.state.totalPerItem;
//           for(var i=0; i < listPrice.length; i++){
//             var totalPrice = totalPrice + listPrice[i].total_sub_price;
//           }
//           this.setState({
//             grandTotal: totalPrice
//           });
//         })
//       }
//     })
//   }

  changeQuantity = (e, id, hargaproduk) => {
    var userID = cookies.get('userSession');
    axios.post('http://localhost:8002/updateCart', {
      newQuantity: e,
      cartID: id,
      userID: userID,
      hargaproduk: hargaproduk
    }).then((ambilData) => {
        axios.post(`http://localhost:8002/showcart`,{
        user_id: userID
      })
      .then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                  dataproduk: ambilData.data,
                  iduser:cookies.get("sessionid")
              });
          }
      )

    //   var totalPrice = 0;
    //   var listPrice = this.state.totalPerItem;
    //   for(var i=0; i < listPrice.length; i++){
    //     totalPrice = totalPrice + listPrice[i].total_sub_price;
    //   }
    //   this.setState({
    //     grandTotal: totalPrice
    //   });

    })
}

  render() 

    {

        let mycookie = cookies.get('sessionid');
        let navigation = (mycookie !== undefined) ? <Header2 /> : <Header />

        if(cookies.get('sessionid') === undefined) {
            return <Redirect to="/Login"/>
        }

        // Logic dimulai disini
        

        // if(cookies.get("login")<"1" || cookies.get('login')=== undefined){
        //     {this.state.redirect= true}
        //     this.props.dispatch({type:'Login', kirim: "gagal bro palsu lu" })
        // }

        if(this.state.redirect){
            return <Redirect to="/"/>
        }

        // tidak berkaitan dgn yang di atas
        const hasil = this.state.dataproduk
        .map((isi, urutan) => 
            {   
                // var iduser= cookies.get('userSession');
                var urut = urutan + 1;
                var cartID = isi.cartID;
                var namaproduk = isi.nama_produk;
                var hargaproduk = isi.harga;
                var quantity = isi.quantity;
                // var totalharga = isi.total_price;
                var totalharga = isi.total_harga;
                console.log(totalharga)
                
                
                return  <tr key={urutan} style={{textAlign: 'center'}}>
                            <td>{urut}</td>
                            <td>{namaproduk}</td>
                            <td>{hargaproduk}</td>
                            <td><input type= "number" min={1} ref="quantity" defaultValue={quantity} 
                            onChange={(e) => this.changeQuantity(e.target.value, cartID, hargaproduk)} /> </td>
                            <td>{totalharga}</td>
                            <td>
                                
                                <button className="btn btn-danger btn-md"  onClick={() => this.deleteCart(cartID)} ><i className="fa fa-trash"></i> Delete</button>
                            </td>
                        </tr>
            }
        );
                return (
                    <div>
                    {navigation}
                    <div className="container" style={{minHeight:590, textAlign:"center"}} >
                    &nbsp;
                    <h1>Cart</h1>
                    &nbsp;
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr style={{backgroundColor: ''}}>
                                    <th style={{textAlign: 'center'}}>Nomor</th>
                                    <th style={{textAlign: 'center'}}>Nama Produk</th>
                                    <th style={{textAlign: 'center'}}>Harga Produk</th>
                                    <th style={{textAlign: 'center'}}>Quantity</th>
                                    <th style={{textAlign: 'center'}}>Total Harga</th>
                                    <th style={{textAlign: 'center'}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hasil}
                            </tbody>
                        </table>
                        
                        {/* <button onClick={()=>this.checkout(this.state.iduser)} className="btn btn-success btn-md"><Link to="/checkout" > Checkout</Link> </button> */}
                        {/* <button href="/checkout" className="btn btn-success btn-md"> */}
                        {/* <Link to="/checkout" className="btn btn-success btn-md"> Checkout</Link>  */}
                        {/* Checkout */}
                        {/* </button> */}
                        <div style={{textAlign: "center", padding: 20}}>
                            <Link to="/checkout" className="btn btn-success btn-md"> Checkout</Link>
                            {/* <button onClick={()=>this.checkout(this.state.iduser)} className="btn btn-success btn-md"><i className="fa fa-arrow-right"></i> Checkout</button> */}
                        </div>
                    </div>

                    
                    </div>
                )
    }
}
// export default connect(mapStateToProps)(cart)
export default cart
