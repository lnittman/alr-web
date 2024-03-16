import React, { forwardRef } from 'react';

interface HeaderProps {
  menuOpen: boolean;
  changeMode: (mode: string) => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ menuOpen, changeMode }, ref) => {
  return (
    <header ref={ref} className={`fixed top-0 left-0 z-10 ${menuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
      <nav className="flex flex-col items-start pl-5 py-4">
        <button onClick={() => changeMode('home')} className="mb-4 hover:text-gray-300 transition-colors duration-300">HOME</button>
        <button onClick={() => changeMode('about')} className="mb-4 hover:text-gray-300 transition-colors duration-300">ABOUT</button>
        <button onClick={() => changeMode('works')} className="mb-4 hover:text-gray-300 transition-colors duration-300">WORKS</button>
        <button onClick={() => changeMode('services')} className="mb-4 hover:text-gray-300 transition-colors duration-300">SERVICES</button>
        <button onClick={() => changeMode('clients')} className="mb-4 hover:text-gray-300 transition-colors duration-300">CLIENTS</button>
        <button onClick={() => changeMode('stockist')} className="mb-4 hover:text-gray-300 transition-colors duration-300">STOCKIST</button>
        <button onClick={() => changeMode('press')} className="mb-4 hover:text-gray-300 transition-colors duration-300">PRESS</button>
      </nav>
    </header>
  );
});

export default Header;