import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Stay connected and track your fitness goals.",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1523473827532-52f0ae91b2a9",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1606813909227-0d9f4f11a6b0",
  },
];
export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container">
      <h1 className="title">E-commerce Product Page</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price-cart">
              <span>${product.price.toFixed(2)}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
