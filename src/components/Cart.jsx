import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div className="cart-panel">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-state">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart