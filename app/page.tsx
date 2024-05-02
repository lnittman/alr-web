"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import CenterContent from "@/components/CenterContent";
import Controls from "@/components/Controls"
import Header from "@/components/Header"
import MenuToggle from "@/components/MenuToggle"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState('home');

  const headerRef = useRef<HTMLDivElement>(null);

  const changeMode = (newMode: string) => {
    console.log(newMode);
    setMode(newMode);

    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element && headerRef.current && !headerRef.current.contains(event.target as Node) && !event.target.closest("#menu-toggle")) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`flex items-center justify-center w-screen h-screen`}>

      {/* top left */}
      <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* top center - logo */}
      <div className={`absolute top-2 rounded-image`}>
        <Image
          className={`select-none blur-effect ${menuOpen ? 'blur-sm' : ''}`}
          src="/stamplogo.png"
          alt="stamp logo"
          width={500}
          height={300}
        />
      </div>

      {/* top right - controls */}
      <div>
        <Controls menuOpen={menuOpen} />
      </div>

      {/* left */}
      <Header changeMode={changeMode} menuOpen={menuOpen} ref={headerRef} />

      {/* center */}
      <CenterContent mode={mode} menuOpen={menuOpen} />

      {/* bottom right*/}
      <a href="https://www.instagram.com/audreylouisereynolds/?hl=en" target="_blank" rel="noopener noreferrer" className={`icon active bottom-0 right-4 z-20 ${menuOpen ? 'blur-sm' : ''}`}>
        <div
          style={{
            width: `100px`,
            height: `100px`,
            position: 'absolute',
            bottom: '0',
            right: '0',
            transform: `scale(0.4)`
          }}
        >
          <Image src="/icons/IG.svg" alt="instagram" layout="fill" objectFit="none" />
        </div>
      </a>
    </div >
  )
}
