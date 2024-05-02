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
      return <div>about content</div>;
    case 'works':
      // Add works content here
      return <div>works content</div>;
    case 'services':
      // Add services content here
      return <div>services content</div>;
    case 'clients':
      // Add clients content here
      return <div>clients content</div>;
    case 'stockist':
      // Add stockist content here
      return <div>stockist content</div>;
    case 'press':
      // Add press content here
      return <div>press content</div>;
    default:
      return null;
  }
};

export default CenterContent;