import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';



class Hariini extends Component {

  state = {
    dollaraustraliabeli: "",
        dollaraustraliajual:"" ,   
        eurobeli:"" ,        
        eurojual: "",    
        poundsterlingbeli:"" ,        
        poundsterlingjual: "",    
        yenbeli:"" ,        
        yenjual:"" ,  
        dollaramerikabeli:"" ,
        dollaramerikajual: "",  

  }

  componentDidMount(){
    axios.get('https://blockchain.info/ticker')
    .then((ambilData) => {     
      this.setState({
        dollaraustraliabeli: ambilData.data.AUD.buy.toFixed(2),
        dollaraustraliajual: ambilData.data.AUD.sell.toFixed(2),   
        eurobeli: ambilData.data.EUR.buy.toFixed(2),        
        eurojual: ambilData.data.EUR.sell.toFixed(2),    
        poundsterlingbeli: ambilData.data.GBP.buy.toFixed(2),        
        poundsterlingjual: ambilData.data.GBP.sell.toFixed(2),    
        yenbeli: ambilData.data.JPY.buy.toFixed(2),        
        yenjual: ambilData.data.JPY.sell.toFixed(2),  
        dollaramerikabeli: ambilData.data.USD.buy.toFixed(2),
        dollaramerikajual: ambilData.data.USD.sell.toFixed(2),                  
      })
      
    })
  }
    
    
    render() {
      



     return (
        <div>
          <Navbar/>

          <center>
            <br/>
            <h3> Harga Bitcoin Hari Ini </h3>


              <table border='6'>
                  <tbody >
                    <tr>
                      <th> Mata Uang </th>
                      <th> Harga Beli Bitcoin </th>
                      <th> Harga Jual Bitcoin </th>                        
                    </tr>
                    <tr>
                      <td>Dollar Australia</td>
                      <td>{this.state.dollaraustraliabeli}</td>
                      <td>{this.state.dollaraustraliajual}</td>                      
                    </tr>
                    <tr>
                      <td>Euro Eropa</td>
                      <td>{this.state.eurobeli}</td>
                      <td>{this.state.eurojual}</td>
                    </tr>
                    <tr>
                      <td>Poundsterling Inggris</td>
                      <td>{this.state.poundsterlingbeli}</td>
                      <td>{this.state.poundsterlingjual}</td>                      
                    </tr>
                    <tr>
                      <td>Yen Jepang</td>
                      <td>{this.state.yenbeli}</td>
                      <td>{this.state.yenjual}</td>                       
                    </tr>
                    <tr>
                      <td>Dollar Amerika</td>
                      <td>{this.state.dollaramerikabeli}</td>
                      <td>{this.state.dollaramerikajual}</td>                      
                    </tr>
                  </tbody>
                  </table>


           </center>
        </div>
        );
       }
     }
    

export default Hariini;
