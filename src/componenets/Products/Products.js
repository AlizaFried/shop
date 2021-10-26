import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map((product) => (
          <Product
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
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
