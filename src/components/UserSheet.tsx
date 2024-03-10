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
import { revalidatePath } from 'next/cache';
import { TypingText } from '@/components/TypingText';
import { ExpandingImage } from '@/components/ExpandingImage';

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

    // revalidatePath('/'); // To revalidate the current path without the previous CACHE

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
                            <div className='h-28'>
                                {avatar !== '' ? (
                                    <ExpandingImage
                                        src={avatar}
                                        alt='User Profile Picture'
                                        width={120} height={100} expandSpeed={20}>
                                    </ExpandingImage>)
                                    :
                                    <ExpandingImage
                                        src='/logo.jpeg' alt='Default profile picture'
                                        width={120} height={100} expandSpeed={20}>
                                    </ExpandingImage>
                                }
                            </div>
                        </span>
                        <SheetTitle className='self-center pb-6'>
                            <TypingText text='@AESMatias'
                                typingSpeed={100}>
                            </TypingText>
                        </SheetTitle>
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