
import React, { useState, useEffect } from 'react';

import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

export interface ScanCarouselProps {
    menuOpen: boolean;
}

const ScanCarousel: React.FC<ScanCarouselProps> = ({ menuOpen }) => {
    const scans = [
        '/scans/SCAN290.jpg',
        '/scans/SCAN291.jpg',
        '/scans/SCAN293.jpg',
        '/scans/SCAN294.jpg',
        '/scans/SCAN296.jpg',
        '/scans/SCAN298.jpg',
        '/scans/SCAN299.jpg',
        '/scans/SCAN301.jpg',
        '/scans/SCAN302.jpg',
        '/scans/SCAN303.jpg',
        '/scans/SCAN304.jpg',
        '/scans/SCAN305.jpg',
        '/scans/SCAN306.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * scans.length));

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('changing scan');
            console.log(currentIndex, scans.length);
            setCurrentIndex((currentIndex) => (currentIndex + 1) % scans.length);
        }, 3000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <CrossfadeCarousel
            className={`flex items-center justify-center ${menuOpen ? 'blur-sm' : ''}`}
            interval={2000}
            transition={1000}
            images={scans}
            imageStyles={{
                width: '70vh',
                height: '70vh',
                objectFit: 'contain',
                objectPosition: 'center'
            }}
        />
    );
};

export default ScanCarousel;