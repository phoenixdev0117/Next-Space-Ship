import { useEffect, useState } from 'react';

interface ExpandingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    expandSpeed: number;
}

export function ExpandingImage({ src, alt, width, height, expandSpeed }) {
    const [currentSize, setCurrentSize] = useState(1);

    useEffect(() => {
        const growImage = () => {
            if (currentSize < (height || width)) {
                setCurrentSize(prevSize => prevSize + 0.2);
            }
        };

        const expandImage = () => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    growImage();
                }, expandSpeed * 1);
            }
        };
        expandImage();

        return () => {
            // Clean the effect when the component unmounts
        };
    }, [currentSize, expandSpeed]); // Añadir las dependencias aquí

    return (
        <div style={{ width: currentSize, height: currentSize }}>
            {(
                <img
                    src={`${src || '/logo.jpeg'}`}
                    alt="User Avatar Default"
                    width={currentSize}
                    height={currentSize}
                    className="rounded-md self-center border-2 border-white/70 border-solid hover:border-white"
                />
            )}
        </div>
    );
}

export default ExpandingImage;