import React, { Component } from 'react';
import Today from './component/Today'
import Rp from './component/Rp'
import Rp2 from './component/Rp2'

import { Route } from 'react-router-dom';


class App extends Component {
    
    render() {

     return (
        <div>
          <Route exact path="/" component={Today}/>
          <Route path="/Rupiahb" component={Rp}/>
          <Route path="/Brupiah" component={Rp2}/>

        </div>
        );
       }
     }
    

export default App;