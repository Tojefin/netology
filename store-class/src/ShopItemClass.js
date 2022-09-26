import { Component } from 'react';

export default class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
  }
  
  render() {
    return(
      <div class="main-content">
      <h2>{this.item.brand}</h2>
      <h1>{this.item.title}</h1>
      <h3>{this.item.description}</h3>
      <div class="description">
      {this.item.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{this.item.currency}{this.item.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }
}