import React from 'react';
import Card from './Card'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Card img={{src: "https://icon-library.com/images/image-gallery-icon/image-gallery-icon-14.jpg", alt: "alt"}}>
        <h5 className="card-title">First Card</h5>
        <p className="card-text">Text for first card</p>
        <a href="#firstcard" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card>
        <h5 className="card-title">Second Card</h5>
        <p className="card-text">Text for second card</p>
        <a href="#secondcard" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}