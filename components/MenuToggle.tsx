import React from 'react';
import { X, Menu } from 'lucide-react';

interface MenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className="fixed top-5 right-5 z-20 focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {menuOpen ? (
        <X size={24} className="icon active" />
      ) : (
        <Menu size={24} className="icon active" />
      )}
    </button>
  );
};

export default MenuToggle;