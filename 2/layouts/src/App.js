import React from 'react';
import Store from './components/Store';
import {products} from './components/data';
import './App.css';

function App() {
  return <Store products={products}/>
};

export default App;