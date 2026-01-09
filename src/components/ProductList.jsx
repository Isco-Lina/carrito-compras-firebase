import { Component } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, name: "Martillo Acero", desc: "Mango reforzado", price: 8990 },
        {
          id: 2,
          name: "Taladro Eléctrico",
          desc: "500W velocidad variable",
          price: 45990,
        },
        {
          id: 3,
          name: "Destornillador Set",
          desc: "Plano y cruz",
          price: 12990,
        },
        {
          id: 4,
          name: "Llave Inglesa",
          desc: "Ajustable 8 pulgadas",
          price: 7990,
        },
        {
          id: 5,
          name: "Serrucho Manual",
          desc: "Corte preciso madera",
          price: 9990,
        },
      ],
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prev) => {
      const exists = prev.cart.find((p) => p.id === product.id);

      if (exists) {
        return {
          cart: prev.cart.map((p) =>
            p.id === product.id ? { ...p, qty: p.qty + 1 } : p
          ),
        };
      }

      return { cart: [...prev.cart, { ...product, qty: 1 }] };
    });
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    }));
  };

  render() {
    return (
      <div className="row">
        {/* Productos */}
        <div className="col-md-8">
          <h4 className="mb-3">Productos</h4>

          {this.state.products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAdd={this.addToCart}
            />
          ))}
        </div>

        {/* Carrito */}
        <div className="col-md-4">
          <Cart cart={this.state.cart} onRemove={this.removeFromCart} />
        </div>
      </div>
    );
  }
}
