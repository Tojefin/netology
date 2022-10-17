import React from 'react';

export default function Listing({items}) {
  items = items.filter(el => el.error_messages === undefined)
  
  const currency = (code) => {
    if (code === 'USD') {
      return '$';
    } else if (code === 'EUR') {
      return '€';
    } else {
      return code+' '
    }
  }
  const styleByCount = (count) => {
    if (count <= 10) {
      return 'level-low';
    } else if (count <= 20) {
      return 'level-medium';
    } else{
      return 'level-high'
    }
  }

  return (
    <div className="item-list">
      {items.map((e, i) => {
        return (
          <div key={e.listing_id} className="item">
            <div className="item-image">
              <a href={e.url}>
                <img alt={e.title} src={e.MainImage.url_570xN}/>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{e.title.length < 50 ? e.title : e.title.slice(0, 50)+'...'}</p>
              <p className="item-price">{currency(e.currency_code)}{e.price}</p>
              <p className={"item-quantity "+styleByCount(e.quantity)}>{e.quantity} left</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}