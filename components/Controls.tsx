import Image from 'next/image';
import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

interface ControlsProps {
  menuOpen: boolean;
};

const Controls: React.FC<ControlsProps> = ({ menuOpen }) => {
  return (
    <div className={`controls-container fixed top-4 right-5 z-20 flex space-x-4 transition-opacity duration-300 ease-in-out ${menuOpen ? 'blur-sm' : ''}`} style={{ width: '160px' }}>
      <button
        style={{
          userSelect: 'none',
        }}
      >
        <Image src="/icons/User.svg" alt="user" layout="responsive" width={120} height={120} objectFit="contain" />
      </button>
      <button
        style={{
          userSelect: 'none',
        }}
      >
        <Image src="/icons/Search.svg" alt="user" layout="responsive" width={120} height={120} objectFit="contain" />
      </button>
      <button
        style={{
          userSelect: 'none',
        }}
      >
        <Image src="/icons/Cart.svg" alt="user" layout="responsive" width={120} height={120} objectFit="contain" />
      </button>
    </div>
  );
};

export default Controls;