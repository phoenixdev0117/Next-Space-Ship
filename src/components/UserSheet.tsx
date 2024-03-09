'use client'

import React, { useRef, useState } from 'react';
import { UserAvatarButton } from './UserAvatarButton';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { postNewImageFirebase } from '@/lib/actions';


interface CustomSheetProps {
    data: object;
}

export const UserSheet: React.FC<CustomSheetProps> = ({ data }) => {

    const [avatar, setAvatar] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected image:', file);
            const imageUrl = URL.createObjectURL(file);
            setAvatar(imageUrl);
            postNewImageFirebase(file);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Sheet>
                <SheetTrigger>
                    <UserAvatarButton
                        user={data}
                        onLogout={() => console.log('FIX THIS 1 Logout')} />
                </SheetTrigger>
                <SheetContent className="w-[320px] sm:w-[400px]">
                    <SheetHeader>
                        <span onClick={handleImageSelect}
                            className='mx-auto cursor-pointer'>
                            {avatar !== '' ? (
                                <Image
                                    src={avatar || "/logo.jpeg"}
                                    alt="User Avatar"
                                    width={100} height={100}
                                    className="object-cover rounded-md self-center border-2
                                     border-white/70
                                     border-solid hover:border-white" />)
                                : <Image
                                    src="/logo.jpeg"
                                    alt="User Avatar Default"
                                    width={100}
                                    height={100}
                                    className="rounded-md self-center border-2 
                                    border-white/70 border-solid hover:border-white"
                                />}
                        </span>
                        <SheetTitle className='self-center pb-6'>USERNAME - Settings</SheetTitle>
                        <SheetDescription className='self-center'>
                            Here you can change your user settings,
                            profile avatar, and more!
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <input
                //This is the hidden file input to select the new image avatar
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
        </div >
    );
};

export default UserSheet;