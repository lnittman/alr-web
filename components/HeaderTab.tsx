import React from 'react';
import Image from 'next/image';

interface HeaderTabProps {
    src: string;
    width: number;
    height: number;
    zoom?: number;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ src, width, height, zoom }) => {
    const scaleFactor = zoom ? zoom / 100 : 1;

    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                position: 'relative',
                transform: `scale(${scaleFactor})`,
                userSelect: 'none',
            }}
        >
            <Image src={src} alt={src} layout="fill" objectFit="none" />
        </div>
    );
};

export default HeaderTab;

