import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import {filters, projects} from './data';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: filters,
      selected: filters[0],
      projects: projects
    }
  }

  handlerToggle = (selctedFilter) => {
    let filtered

    if (selctedFilter === 'All') {
      filtered = projects
    } else {
      filtered = projects.filter(item => item.category === selctedFilter)
    }

    this.setState({
      selected: selctedFilter,
      projects: filtered
    })
  }

  render() {
    return(
      <div>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={(selected) => this.handlerToggle(selected)} />
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}

export default Portfolio