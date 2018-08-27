import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class Brupiah extends Component {

  state = {
    input:null,
    repos:null,
    masuk:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ masuk:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value*14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {
      const{masuk} = this.state;
      
     return (

        <div>
          <Navbar/>
        <center>
          <br/>
          <h3>Konversi Bitcoin ke Rupiah </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
            
          <br/>
          <input value = {masuk} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
          <br/>
          { this.state.masuk ? <h4>BTC {masuk} &nbsp; Rp {this.state.hasil}</h4> :
          <div>
           <br/> 
          <h4>Silakan input nominal Bitcoin</h4>
          </div>
           }

        </center>

        </div>
        );
       }
     }
    

export default Brupiah;
