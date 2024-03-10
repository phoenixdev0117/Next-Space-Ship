'use client'

import { useEffect, useState } from 'react';

export function TypingText({ text, typingSpeed }) {
    typingSpeed = typingSpeed || 100;

    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const typeText = () => {
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    setDisplayedText(text.slice(0, i + 1));
                }, typingSpeed * i);
            }
        };

        typeText();

        return () => {
            // Limpiar el efecto cuando el componente se desmonte
            setDisplayedText('');
        };
    }, []);

    return (
        <p>{displayedText}</p>
    );
}

export default TypingText;