'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface UserAvatarButtonProps {
    user: any;
    onLogout: () => void;
}

export const UserAvatarButton: React.FC<UserAvatarButtonProps> = ({ photoURL, onLogout }) => {


    const [imageLoaded, setImageLoaded] = useState(false);

    const imageLoadedFunction = () => {
        setImageLoaded(true);
        console.log('Image loaded:');
        console.log(photoURL)
    }
    return (
        <div className=''>
            <span
                onClick={() => console.log('Avatar clicked')}
            >
                <Image
                    src={`${photoURL || '/logo.jpeg'}`}
                    alt="Profile Picture Image (Avatar)"
                    width={80}
                    height={80}
                    className={`${imageLoaded ? '' : `hidden`} 
                    rounded-full object-cover h-24 w-24
                    self-center border-2 border-white/0 border-solid
                    transition duration-200 ease-in-out hover:border-white`}
                    priority // Does not work without this
                    onLoad={() => imageLoadedFunction()}
                />

                {(imageLoaded === false) ?
                    (<div className="animate-spin rounded-full h-12 w-12
                                    border-t-2 border-cyan-500">
                    </div>) :
                    (null)}
            </span >



        </div>

    )
}

export default UserAvatarButton;