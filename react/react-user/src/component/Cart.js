import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
import Cookies from 'universal-cookie'

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
      redirect: false
  }
  componentDidMount(){
      axios.post(`http://localhost:8002/showcart`,{
        user_id:cookies.get("login")
      })
      .then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                  dataproduk: ambilData.data
              });
          }
      )
  }

  deleteCart = (e) =>{
      axios.post('http://localhost:8002/deleteCart',{
          cartID:e
      })
      window.location.reload()
    //   .then ((hasil) => {
    //     this.setState({
    //         dataproduk: hasil.data
    //     })
    //   })
    
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

  changeQuantity = (e, id) => {
    var userID = cookies.get('userSession');
    axios.post('http://localhost:8005/updateCart', {
      newQuantity: e,
      cartID: id,
      userID: userID
    }).then((response) => {
      console.log(response.data);
      var cartData = response.data[0];
      var totalPerItem = response.data[1];
      // console.log(totalPerItem);

      this.setState({
        detailCart: cartData,
        totalPerItem: totalPerItem,
      });

      var totalPrice = 0;
      var listPrice = this.state.totalPerItem;
      for(var i=0; i < listPrice.length; i++){
        totalPrice = totalPrice + listPrice[i].total_sub_price;
      }
      this.setState({
        grandTotal: totalPrice
      });

    })
}

  render() 
    {
        // Logic dimulai disini
        console.log(cookies.get("login") + " ini ada cookies login")

        if(cookies.get("login")<"1" || cookies.get('login')=== undefined){
            {this.state.redirect= true}
            this.props.dispatch({type:'Login', kirim: "gagal bro palsu lu" })
        }

        if(this.state.redirect){
            return <Redirect to="/"/>
        }

        // tidak berkaitan dgn yang di atas
        const hasil = this.state.dataproduk
        .map((isi, urutan) => 
            {
                var urut = urutan + 1;
                var cartID = isi.cartID;
                var namaproduk = isi.nama_produk;
                var hargaproduk = isi.harga;
                var quantity = isi.quantity;
                // var totalharga = isi.total_price;
                var totalharga = hargaproduk*quantity;
                
                
                return  <tr key={urutan} style={{textAlign: 'center'}}>
                            <td>{urut}</td>
                            <td>{namaproduk}</td>
                            <td>{hargaproduk}</td>
                            <td><input type= "number" min={1} ref="quantity" defaultValue={quantity} onChange={(e) => this.changeQuantity(e.target.value)} /> </td>
                            <td>{totalharga}</td>
                            <td>
                                
                                <button className="btn btn-danger btn-md"  onClick={() => this.deleteCart(cartID)} ><i className="fa fa-trash"></i> Delete</button>
                            </td>
                        </tr>
            }
        );
                return (
                    <div className="container" style={{minHeight:470}} >
                    <center><h1>Cart</h1></center>

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
                    </div>
                )
    }
}
// export default connect(mapStateToProps)(cart)
export default cart
