import React from 'react';

function ShopCard(props) {
  return props.products.map(el => 
    <div className="shopcard">
      <img src={el.img} />
      <div className="title">
        <h2>{el.name}</h2>
        <p style={{color: "#555555"}}>{el.color}</p>
      </div>
      <div className="footer">                    
        <p style={{color: "red"}}>${el.price}</p>
        <button className="btn">Add to card</button>
        </div>
    </div> 
  )
      
};

export default ShopCard