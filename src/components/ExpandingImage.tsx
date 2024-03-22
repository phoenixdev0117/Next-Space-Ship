import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ExpandingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    expandSpeed: number;
}

export function ExpandingImage({ src, alt, width, height, expandSpeed }) {


    //TODO: InstallTrigger is deprecated and will be removed in the future.
    // You should use the navigator.userAgent or navigator.vendor to detect Firefox. (not tested yet)
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

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
        if (isFirefox) {
            expandImage();
        }
        else {
            setCurrentSize(height || width);
        }

        return () => {
            // Clean the effect when the component unmounts
        };
    }, [currentSize, expandSpeed]); // Añadir las dependencias aquí


    // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    return (
        <div style={{
            width: currentSize,
            height: currentSize
        }}>
            {(isFirefox) ? (
                <Image
                    src={`${src || '/logo.jpeg'}`}
                    alt="User Avatar Default"
                    width={currentSize}
                    height={currentSize}
                    className={`rounded-md self-center border-2 border-white/70 mx-auto
                     border-solid hover:border-white object-cover h-32 w-32`}
                />
            ) : (<Image
                src={`${src || '/logo.jpeg'}`}
                alt="User Avatar Default"
                width={currentSize}
                height={currentSize}
                className={`rounded-md self-center border-2
                 border-white/70
                 border-solid hover:border-white object-cover h-32 w-32`}
            />)}
        </div>
    );
}

export default ExpandingImage;
