"use client"

import React, { useEffect, useRef, useState } from 'react';

import { Instagram } from 'lucide-react';
import Image from 'next/image';

import CenterContent from "@/components/CenterContent";
import Controls from "@/components/Controls"
import Header from "@/components/Header"
import MenuToggle from "@/components/MenuToggle"
import ScanCarousel from "@/components/ScanCarousel"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState('home');

  const headerRef = useRef(null);

  const changeMode = (newMode: string) => {
    console.log(newMode);
    setMode(newMode);

    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`flex items-center justify-center w-screen h-screen`}>

      {/* top left - header */}
      <Header changeMode={changeMode} menuOpen={menuOpen} ref={headerRef} /> 

      {/* top left - controls */}
      <Controls menuOpen={menuOpen} />

      {/* top center - logo */}
      <div className={`absolute top-2 rounded-image`}>
        <Image
          className={`blur-effect ${menuOpen ? 'blur-sm' : ''}`}
          src="/stamplogo.png"
          alt="stamp logo"
          width={500}
          height={300}
        />
      </div>

      {/* top right */}
      <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <CenterContent mode={mode} menuOpen={menuOpen} />

      {mode === 'home' && (
        <ScanCarousel menuOpen={menuOpen} />
      )}


      {mode === 'about' && (
        <div>
        </div>
      )}

      {mode === 'works' && (
        <div>
        </div>
      )}

      {mode === 'services' && (
        <div>
        </div>
      )}

      {mode === 'clients' && (
        <div>
        </div>
      )}

      {mode === 'stockist' && (
        <div>
        </div>
      )}

      {mode === 'press' && (
        <div>
        </div>
      )}

      {/* bottom right - ig */}

      <a href="https://www.instagram.com/audreylouisereynolds/?hl=en" target="_blank" rel="noopener noreferrer" className="absolute bottom-12 right-4 z-20">
        <Instagram size={32} className="icon active" />
      </a>
    </div>
  )
}
