import '../App.css'
import React, { useState, useEffect } from 'react';
import { fetchProducts, createProducts } from '../services/productService'; // Adjust the import path accordingly
import lemonLogo from '../assets/Asset 9@4x.png'

function Menu () {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const getProducts = async () => {
      const loadedProducts = await fetchProducts();
      setProducts(loadedProducts);
    };

    getProducts();
  }, []);

  // Function to group products by category
  const groupProductsByCategory = () => {
    const groupedProducts = {};
    console.log('products', JSON.parse(JSON.stringify(products)))
    products.forEach(product => {
      const category = product.Category;
      if (!groupedProducts[category]) {
        groupedProducts[category] = [];
      }
      groupedProducts[category].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.Category === selectedCategory);
  const categoriesOrder = ['All', 'Appetizers', 'First Courses', 'Second Courses', 'Desserts', 'Drinks'];
  const categoriesSet = new Set(products.map(product => product.Category));
  const categories = ['All', ...categoriesOrder.filter(category => categoriesSet.has(category))];


  return (
    <div>

      <h1 className='menu-title'>Product List</h1>

      <div className='menu-container'>

        {/* Categories */}
        <div className='categories'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className='category-btn'
              style={{
                marginRight: '10px',
                marginBottom: '10px',
                backgroundColor: selectedCategory === category ? '#F4CE14' : '#495E57',
                color: selectedCategory === category ? 'black' : 'white',
                fontWeight: selectedCategory === category ? '700' : '300',
                fontSize: '16px',
                borderRadius: '5px',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <ul className='products'>
          {filteredProducts.map(product => (
            <li key={product.Id} className='product-card'>
              <div>
                <img src={product.ImageSource} alt={product.Name} className='product-img' />
                <h3 className='product-name'>{product.Name}</h3>
                <p className='product-description'>{product.Description}</p>
                <p className='product-price'>${product.Price}</p>
                {/* {product.Vegan ? (
                  <div className='vegan-option'>
                    <div><img src={lemonLogo} alt="Lemon Logo" className='vegan-lemon-logo' /></div>
                    <p>Vegan</p>
                  </div>
                ) : (
                  <div></div>
                )} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;