import Image from 'next/image';
import React from 'react';

interface MenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      id="menu-toggle"
      className="absolute top-1 left-20 z-20 focus:outline-none select-none"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {menuOpen ? (
        <div
          className="icon active"
          style={{
            width: `70px`,
            height: `70px`,
            transform: `scale(0.35)`
          }}
        >
          <Image src="/icons/X.svg" alt="instagram" layout="fill" objectFit="none" />
        </div>
      ) : (
        <div
          className="icon active"
          style={{
            width: `70px`,
            height: `70px`,
            transform: `scale(0.3)`
          }}
        >
          <Image src="/icons/Menu.svg" alt="instagram" layout="fill" objectFit="none" />
        </div>
      )}
    </button>
  );
};

export default MenuToggle;