import React from 'react';
import ScanCarousel from './ScanCarousel';

interface CenterContentProps {
  mode: string;
  menuOpen: boolean;
}

const CenterContent: React.FC<CenterContentProps> = ({ mode, menuOpen }) => {
  switch (mode) {
    case 'home':
      return <ScanCarousel menuOpen={menuOpen} />;
    case 'about':
      // Add about content here
      return <div>About Content</div>;
    case 'works':
      // Add works content here
      return <div>Works Content</div>;
    case 'services':
      // Add services content here
      return <div>Services Content</div>;
    case 'clients':
      // Add clients content here
      return <div>Clients Content</div>;
    case 'stockist':
      // Add stockist content here
      return <div>Stockist Content</div>;
    case 'press':
      // Add press content here
      return <div>Press Content</div>;
    default:
      return null;
  }
};

export default CenterContent;