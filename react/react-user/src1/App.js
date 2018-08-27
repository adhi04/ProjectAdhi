import React, { Component } from 'react';
import Hariini from './component/Hariini'
import Rupiahb from './component/Rupiahb'
import Brupiah from './component/Brupiah'

import { Route } from 'react-router-dom';


class App extends Component {
    
    render() {

     return (
        <div>
          <Route exact path="/" component={Hariini}/>
          <Route path="/Rupiahb" component={Rupiahb}/>
          <Route path="/Brupiah" component={Brupiah}/>

        </div>
        );
       }
     }
    

export default App;
