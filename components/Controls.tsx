import React from 'react';
import { ShoppingBag, User, Search } from 'lucide-react';

interface ControlsProps {
    menuOpen: boolean;
};

const Controls: React.FC<ControlsProps> = ({ menuOpen }) => {
  return (
    <div className={`controls-container fixed top-6 left-5 z-20 flex space-x-4 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
      <button>
        <User size={24} className="controls-icon active" />
      </button>
      <button>
        <Search size={24} className="controls-icon active" />
      </button>
      <button>
        <ShoppingBag size={24} className="controls-icon active" />
      </button>
    </div>
  );
};

export default Controls;