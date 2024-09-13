import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Nexo</h1>
      <nav className="space-x-4">
        <a href="#shop" className="text-gray-600 hover:text-gray-900">Shop</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  </header>
  )
}

export default Header
