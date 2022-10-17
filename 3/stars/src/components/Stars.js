import React from 'react';
import Star from './Star';

export default function Stars({count}) {
  if (!Number.isInteger(count) || count > 5 || count < 1) return

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map((e, i) => <li key={i}><Star/></li>)}
    </ul>
  )
}