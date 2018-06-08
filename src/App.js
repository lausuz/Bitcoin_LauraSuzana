import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Tabelharga from './komponen/Tabelharga'
import Konversibit from './komponen/Konversibit'
import Konversirp from './komponen/Konversirp'

class App extends Component {
  render() {
    return (
      <div className='container all' >
        <div className='row'>
				<div className='col-lg-3'>
          <div className='list-group mylist'>
          <Link to ='/tabelharga' className="list-group-item">Tabel Harga Bitcoin </Link>
          <Link to ='/konversirp' className="list-group-item">Konversi Nilai RP ke BitCoin </Link>
          <Link to ='/konversibit' className="list-group-item">Konversi Nilai BitCoin ke Rupiah</Link>
          </div>
           
        </div>

        <div className='col-lg-9'>
          <Route path='/' component={'Home'} />
          <Route path='/tabelharga' component={Tabelharga} />
          <Route path='/konversirp' component={Konversirp} />
          <Route path='/konversibit' component={Konversibit} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;

//================================================================================================================

// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component 
// {

//     constructor() 
//     {
//     super();

//     this.state = 
//     {
//     dataKu: [],
// };
// } 
// componentDidMount()
// {
//       axios.get('https://jsonplaceholder.typicode.com/users')
//       .then((ambilData) => {
//       console.log(ambilData);
//       this.setState({
//       dataKu: ambilData.data,
//       })
//     })
//   };

// render() {
//         var css = {border:'1px solid black', padding:'12px'}
//         const data = this.state.dataKu.map((x, y)=>{
//         var id = x.id;
//         var name = x.name;
//         var mail = x.email;
//         var alamat = [
//         x.address.suite,
//         x.address.street,
//         x.address.city].join(", ");

//   return <tr style={css} key={y}>
//           <td style={css}>{id}</td>
//           <td style={css}>{name}</td>
//           <td style={css}>{mail}</td>
//           <td style={css}>{alamat}</td>
//           </tr>; 
//   })

//   return (
//           <div><center>
//           <h1>Coba Get Data</h1>
//           <table style={css}>
//           <tbody>
//           <tr>
//           <th>No</th>
//           <th>Nama</th>
//           <th>Email</th>
//           <th>Alamat</th>
//           </tr>
//           { data }
//           </tbody>
//           </table>
//           </center></div>
//       );
//     }}
//     export default App;
