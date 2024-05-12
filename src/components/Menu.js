import '../App.css'
import React, { useState, useEffect } from 'react';
import { fetchProducts, createProducts } from '../services/productService'; // Adjust the import path accordingly

function Menu () {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const loadedProducts = await fetchProducts();
      setProducts(loadedProducts);
    };

    getProducts();
  }, []);

  return (
    <div>
      <button onClick={createProducts}>Create products</button>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.Name}</h2>
            <p>Description: {product.Description}</p>
            <p>Price: ${product.Price}</p>
            {/* <p>ImageSource: {product.ImageSource}</p> */}
            <img src={product.ImageSource} alt={product.Name} style={{ width: 100, height: "auto" }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;