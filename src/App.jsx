import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = Array.from(
    new Set(sampleProducts.map((product) => product.category))
  )

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <h1>🛒 Shopping App</h1>
            <p>
              Welcome! Your task is to implement filtering, cart management, and
              dark mode.
            </p>
          </div>
          <DarkModeToggle
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </header>

        <section className="toolbar">
          <label htmlFor="category-filter">Filter by Category</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </section>

        <main className="main-layout">
          <ProductList
            selectedCategory={selectedCategory}
            darkMode={darkMode}
            addToCart={addToCart}
          />
          <Cart cart={cart} />
        </main>
      </div>
    </div>
  )
}

export default App