'use client'

import React from 'react';
import Image from 'next/image';


interface UserAvatarButtonProps {
    user: any;
    onLogout: () => void;
}

export const UserAvatarButton: React.FC<UserAvatarButtonProps> = ({ user, onLogout }) => {
    return (
        <div>
            <button
                onClick={() => console.log('Avatar clicked')}
            >
                <Image
                    src="/logo.jpeg"
                    alt="Space Ship"
                    width={64}
                    height={64}
                    className="rounded-full self-center border-2 border-white/0 border-solid
                    transition duration-200 ease-in-out hover:border-white"/>
            </button >
        </div>

    )
}

export default UserAvatarButton;