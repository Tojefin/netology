import React from 'react';
import './App.css';
import News from './components/News/';
import Search from './components/Search/';
import Advertise from './components/Advertise';
import Widgets from './components/Widgets';

export default function App() {
  return (
    <React.Fragment>
      <News />
      <Search />
      <Advertise />
      <Widgets />
    </React.Fragment>
  );
}