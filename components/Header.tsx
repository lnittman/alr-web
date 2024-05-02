import React, { forwardRef } from 'react';

import HeaderTab from '@/components/HeaderTab';

interface HeaderProps {
  menuOpen: boolean;
  changeMode: (mode: string) => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ menuOpen, changeMode }, ref) => {
  return (
    <header ref={ref} className={`fixed top-0 left-0 z-10 h-full ${menuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
      <nav className="flex flex-col items-start justify-center pl-5 py-4 h-full">
        <button className="mb-6" onClick={() => changeMode('home')} disabled={!menuOpen}>
          <HeaderTab src="/icons/Home.svg" width={200} height={60} zoom={70} />
        </button>
        <button className="mb-6" onClick={() => changeMode('about')} disabled={!menuOpen}>
          <HeaderTab src="/icons/About.svg" width={200} height={80} zoom={70} />
        </button>
        <button className="mb-6" onClick={() => changeMode('services')} disabled={!menuOpen}>
          <HeaderTab src="/icons/Services.svg" width={200} height={80} zoom={70} />
        </button>
        <button className="mb-6" onClick={() => changeMode('clients')} disabled={!menuOpen}>
          <HeaderTab src="/icons/Clients.svg" width={200} height={80} zoom={70} />
        </button>
        <button className="mb-6" onClick={() => changeMode('stockist')} disabled={!menuOpen}>
          <HeaderTab src="/icons/Stockist.svg" width={200} height={80} zoom={70} />
        </button>
        <button onClick={() => changeMode('press')} disabled={!menuOpen}>
          <HeaderTab src="/icons/Press.svg" width={200} height={80} zoom={70} />
        </button>
      </nav>
    </header>
  );
});

export default Header;