import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import KonversiBitcoinkeRp from './component/Rp';
import KonversiRpKeBitcoin from './component/Rp2';
import TabelHargaBitcoin from './component/Today';


class App extends Component {
  render() 
  {
    return (

      <div>
            <Route exact path ="/" component={TabelHargaBitcoin}/>
            <Route path="/tabelhargabitcoin" component={TabelHargaBitcoin}/>
            <Route path="/konversirupiahkebitcoin" component={KonversiRpKeBitcoin}/>
            <Route path="/konversibitcoinkerupiah" component={KonversiBitcoinkeRp}/>
       </div>
    );
  }
}

export default App;