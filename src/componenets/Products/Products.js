import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    console.log(this.props.valueRange);
    return (
      <div className="products">
        {this.props.products.map((product) =>
          product.price >= this.props.valueRange[0] &&
          product.price <= this.props.valueRange[1] ? (
            <Product
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default Products;

// class Todos extends Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <ul>
//         {todos.map(({ id, title }) => (
//           <Todo id={id} title={title} key={id}>
//             <button>
//               <div>1</div>
//             </button>
//           </Todo>
//         ))}
//       </ul>
//     );
//   }
// }
