'use client'

import React, { useRef, useState, useEffect } from 'react';
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
import { revalidatePath } from 'next/cache';
import { TypingText } from '@/components/TypingText';
import { ExpandingImage } from '@/components/ExpandingImage';
import { getUsernameInfo } from '@/lib/getUsernameInfo';
import { FirebaseUploadAvatar, FirebaseDownloadAvatar } from '@/lib/FirebaseAvatar';
import { Button } from '@/components/ui/button';
import { logOutFromAccount } from '@/lib/logOutFromAccount';
import { useRouter } from "next/navigation";
import { Suspense } from 'react';
import {getAvatarLocalStore} from '@/lib/FirebaseAvatar';
interface CustomSheetProps {
    data?: any;
}

export const UserSheet: React.FC<CustomSheetProps> = ({ data }) => {

    const router = useRouter();

    const [avatar, setAvatar] = useState(null);
    const [loadingNewAvatar, setLoadingNewAvatar] = useState(false);
    const [counterOfChanges, setCounterOfChanges] = useState(0);

    const [userInfo, setUserInfo] = useState({
        photoURL: '',
        uid: '',
        email: '',
        displayName: ''
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const saveAvatarLocalStore = async (avatar) => {
        await localStorage.setItem('ss_forum_avatar', avatar);
    }


    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingNewAvatar(true);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setLoadingNewAvatar(false);

        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // setAvatar(imageUrl);
            if (userInfo){
            // saveAvatarLocalStore(imageUrl);
            }
            const urlImageFirebase = await FirebaseUploadAvatar(userInfo, imageUrl, setCounterOfChanges); // Upload the image, then return the URL or null
            // handleLogOut();
        }
    };

    // revalidatePath('/'); // To revalidate the current path without the previous CACHE

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await getUsernameInfo();
            let { photoURL, uid, email, displayName } = userInfo || {
                photoURL: '',
                uid: '',
                email: '',
                displayName: ''
            }
            setUserInfo(userInfo);
            getAvatarLocalStore().then((avatar) => {
                setAvatar(avatar);
            });
        };
        fetchUserInfo();
        return () => {
            // cleanup
        };
        
    }, [counterOfChanges]);

    const handleLogOut = async () => {
        const res = await logOutFromAccount();
        if (res) {
            router.push('/')
            globalThis.location.reload();
            setUserInfo({
                photoURL: '',
                uid: '',
                email: '',
                displayName: ''
            });
        }
        else {
            console.log('Error logging out');
        }
    }


    return (
        <div className="flex flex-col justify-center items-center h-40">
            <Sheet>
                <SheetTrigger>

                    {(userInfo?.photoURL) !== '' ? (
                        <UserAvatarButton
                            photoURL={userInfo?.photoURL}
                            onLogout={() => console.log('FIX THIS 1 Logout')} />
                    ) :
                        <UserAvatarButton
                            photoURL='/logo.jpeg'
                            onLogout={() => console.log('FIX THIS 2 Logout')} />

                    }


                </SheetTrigger>

                <SheetContent side={`bottom`} 
                className="md:hidden h-full sm:w-full">
                    <SheetHeader>
                        <span onClick={handleImageSelect}
                            className='mx-auto cursor-pointer'>

                            <div className='h-32 '>
                                {(userInfo?.photoURL) !== '' ? (
                                    <ExpandingImage
                                        src={userInfo?.photoURL}
                                        alt='User Profile Picture'
                                        width={120} height={120} expandSpeed={12}>
                                    </ExpandingImage>)
                                    :
                                    <ExpandingImage
                                        src={userInfo?.photoURL}
                                        alt='Default profile picture'
                                        width={120} height={120} expandSpeed={12}>
                                    </ExpandingImage>
                                }
                                
                            </div>

                        </span>
                        <SheetTitle className='self-center pb-6'>
                            <TypingText text={`${userInfo?.displayName || 'Anonymous'}`}
                                typingSpeed={250}>
                            </TypingText>
                        </SheetTitle>
                        <SheetDescription className='self-center sm:w-96 font-bold'>
                            To make changes to your profile, or change your avatar,
                            please go to the Account section in the menu.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>

                <SheetContent side={`right`} 
                className="hidden md:block w-[320px] sm:w-[400px]">
                    <SheetHeader>
                        <span onClick={handleImageSelect}
                            className='mx-auto cursor-pointer'>




            {loadingNewAvatar ? (

            <div className="flex flex-col justify-center items-center h-30">
                <div className="animate-spin rounded-full h-24 w-24 border-t-2
                border-cyan-400">
                </div>
                <span className="my-2 text-lg">Making your new Avatar! ...</span>
            </div>

            ) : (
                <div className='h-32'>
                {(userInfo?.photoURL) ? (
                    <ExpandingImage
                    src={userInfo?.photoURL}
                    alt='User Profile Picture'
                    width={120}
                    height={120}
                    expandSpeed={12}
                    />
                ) : (
                    <ExpandingImage
                    src='/logo.jpeg'
                    alt='Default profile picture'
                    width={120}
                    height={120}
                    expandSpeed={12}
                    />
                )}
                </div>
            )}


                        </span>
                        <SheetTitle className='self-center pb-6'>
                            <TypingText text={`${userInfo?.displayName || 'Anonymous'}`}
                                typingSpeed={250}>
                            </TypingText>
                        </SheetTitle>
                        <SheetDescription className='self-center font-semibold'>

                        {(counterOfChanges > 0 && userInfo?.displayName) ? (
                            <div className="my-4 text-lg"> 
                        <text className="my-4 text-lg text-sky-100">Your new Avatar has been updated,
                    but can take a few seconds to update, please be patient.
                        </text>
                        </div>) : (
                        null
                        )}  <div>
                            <text className='mt-8'>
                            Here you can change your user settings,
                            profile avatar, check your stats, and more!
                                </text>
                                </div>
                        </SheetDescription>
                    </SheetHeader>



                    {userInfo?.displayName ? (
                        <Button 
                    onClick={() => handleLogOut()}
                    variant={"destructive"} className="flex align-self font-bold text-xl mx-auto my-6
                    mt-96">
                        Close session
                    </Button>):(null)}

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