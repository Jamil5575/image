import React from 'react';

function Header() {
  return (
    <header className="p-4 border-b border-gray-700">
      <h1 className="text-3xl font-bold text-neon-blue">AI Image Tool</h1>
      <nav>
        <a href="#" className="text-neon-blue">TikTok</a>
        <a href="#" className="text-neon-blue">Instagram</a>
        <a href="#" className="text-neon-blue">Twitter</a>
      </nav>
    </header>
  );
}

export default Header;