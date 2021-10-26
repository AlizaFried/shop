import { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div class="product-card">
        <div class="product-image">
          <img src={this.props.image} />
        </div>
        <div class="product-info">
          <h5>{this.props.title}</h5>
          <h6>{this.props.price}</h6>
        </div>
      </div>
    );
  }
}

export default Product;
