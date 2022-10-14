import React from 'react';

function Toolbar(props) { 
  const {filters, selected, onSelectFilter } = props;

  return (
    <div>
      {
        filters.map((item) => {
          const className = item === selected ? 'filter-selected' : 'filter'
          return ( <button className={className} onClick={e => onSelectFilter(item)}> {item} </button> )
        })
      }
    </div>
  )
}

export default Toolbar

  