import React from 'react';
import IconSwitch from './IconSwitch'
import ShopItem from './ShopItem'
import ShopCard from './ShopCard'
import ListView from './ListView'
import CardsView from './CardsView'

class Store extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      icon: "view_list"
    }
  }

  handToggle = () => {
    this.state.icon === "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})
  }

  render() {
    return (
      <div>
        <IconSwitch icon={this.state.icon} onSwitch={this.handToggle} />
        {
          this.state.icon === "view_module" ? 
          <CardsView cards={<ShopCard products={this.props.products} />} /> :
          <ListView items={<ShopItem products={this.props.products} />} />
        }
      </div>
    )
  }
};

export default Store