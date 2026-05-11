import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

 // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

     {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

       {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>


      {/* TODO: Implement and render Cart component */}
      {/* Pass props */}
      <ProductList
        category={category}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App