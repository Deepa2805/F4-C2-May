import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Component/Table.js';
import './Component/style.css';

function App() {
  const [data, setData] = useState([]);

  useEffect( () => {
    async function getData(){
    let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    let actData = await res.json();
    setData(actData);
    }
    getData();
  }, []);



  return (
   <table>
    <thead>
      <tr>
      <td>Name</td>
      <td>Id</td>
      <td>Image</td>
      <td>Symbol</td>
      <td>Current Price</td>
      <td>Total Volume</td>
      </tr>

    </thead>

    <tbody>
      {data.map((item)=>(<Table key = {item.id} item={item}
      />))}    
    </tbody>
   </table >
  );
}

export default App;
