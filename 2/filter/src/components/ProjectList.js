import React from 'react';

function ProjectList(props) {
  const {projects} = props;
  
  return (
    <div className="portfolioList">
      {
        projects.map( (item) => <img alt={item.category} src={item.img}/> )
      }
    </div>
  )
}

export default ProjectList