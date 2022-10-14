import React from 'react';

function ShopItem(props) {
  return props.products.map(el => 
    <li className="shopitem">
      <img src={el.img} />
      <h2>{el.name}</h2>
      <p style={{color: "#555555"}}>{el.color}</p>
      <p style={{color: "red"}}>${el.price}</p>
      <button className="btn">Add to card</button>    
    </li>
  )
}

export default ShopItem