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
      return <div className={menuOpen ? 'blur-sm' : ''}>about content</div>;
    case 'works':
      // Add works content here
      return <div className={menuOpen ? 'blur-sm' : ''}>works content</div>;
    case 'services':
      // Add services content here
      return <div className={menuOpen ? 'blur-sm' : ''}>services content</div>;
    case 'clients':
      // Add clients content here
      return <div className={menuOpen ? 'blur-sm' : ''}>clients content</div>;
    case 'stockist':
      // Add stockist content here
      return <div className={menuOpen ? 'blur-sm' : ''}>stockist content</div>;
    case 'press':
      // Add press content here
      return <div className={menuOpen ? 'blur-sm' : ''}>press content</div>;
    default:
      return null;
  }
};

export default CenterContent;