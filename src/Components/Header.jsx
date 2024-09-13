import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Nexo</h1>
      <nav className="space-x-4">
        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
        <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header
