import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class Rupiahb extends Component {

  state = {
    input:null,
    repos: null,
    seriesName:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ seriesName:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value/14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {

      const{seriesName} = this.state;

     return (

        <div>
          <Navbar/>
        <center>
          <br/>
          <h3>Konversi Rupiah ke Bitcoin </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
            
          <br/>
          <input value = {seriesName} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
          <br/>
          { this.state.seriesName ? <h4>Rp {seriesName} &nbsp; BTC {this.state.hasil}</h4> :
          <div>
          <br/> 
          <h4>Silakan input nominal Rupiah</h4> 
          </div>}

        </center>

        </div>
        );
       }
     }
    

export default Rupiahb;
