import React from 'react';

function ListView(props) {
  return (
    <ul className="listview">{props.items}</ul>
  )
}

export default ListView