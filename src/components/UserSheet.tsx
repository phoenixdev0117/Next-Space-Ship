'use client'

import React from 'react';
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


interface CustomSheetProps {
    data: object;
}

export const UserSheet: React.FC<CustomSheetProps> = ({ data }) => {


    return (
        <div className="flex flex-col justify-center items-center">
            <Sheet>
                <SheetTrigger>
                    <UserAvatarButton user={data} onLogout={() => console.log('Logout')} />
                </SheetTrigger>
                <SheetContent className="w-[320px] sm:w-[400px]">
                    <SheetHeader>
                        <Image
                            src="/logo.jpeg"
                            alt="Space Ship"
                            width={100}
                            height={100}
                            className="rounded-md self-center border-2 border-white/60 border-solid"
                        />
                        <SheetTitle className='self-center pb-6'>My Account</SheetTitle>
                        <SheetDescription className='self-center'>
                            Here you can change your user settings,
                            profile avatar, and more!
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div >
    );
};

export default UserSheet;