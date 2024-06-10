'use client'
import React, { Suspense } from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { CustomCard } from "@/components/CardCustom";
import Image from 'next/image';
import { retrieveAvatar } from '@/lib/retrieveAvatar';


export const CustomDrawer = ({ data, isHome = true }) => {
    // We solve this when the firebase posts are done
    // : React.FC<CustomDrawerProps> 
    const [avatar, setAvatar] = useState('/logo.jpeg');

    useLayoutEffect(() => {
    if (data?.fromUserId !== null) {
        const avatarFunc = async (userId) =>{
            const retrievedAvatar = await retrieveAvatar(data?.fromUserId );
            if (retrievedAvatar === null) {
                setAvatar('/logo.jpeg');
                return '/logo.jpeg';
            }
            setAvatar(retrievedAvatar);
            console.log("CORRECTO", retrievedAvatar)
            return retrievedAvatar;
        }

        avatarFunc(data?.fromUserId );
    }
    }, [data?.fromUserId]);

    return (
        <Suspense fallback={
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-4 
                border-cyan-400">
                </div>
                <span className="my-10 text-xl">Loading ...</span>
            </div>
        }>
            <div className={`flex flex-col ${isHome ? 'items-left' : 'items-center'} justify-center`}>

                <Drawer>
                    <DrawerTrigger className='w-12/12 md:w-12/12 lg:max-w-4xl select-none'>
                        <CustomCard data={data} avatarURL={avatar}/>
                    </DrawerTrigger>
                    <DrawerContent >
                        <DrawerHeader className='overflow-x-hidden h-screen  flex flex-col justify-around
                        px-0 bg-black/60 overflow-y-auto pt-52 sm:pt-36'>

                             <div className='flex flex-col justify-evenly space-y-6'>
                            <DrawerTitle className='pt-6 font-bold text-center w-8/12 mx-auto'>
                                <h3 className='select-text'>
                                Post made by {data?.usernameToDisplay}
                                </h3>
                            </DrawerTitle>
                            <Image
                                src={avatar || '/logo.jpeg'}
                                alt={data?.usernameToDisplay + ' Avatar Image'}
                                className='rounded-3xl self-center 
                                
                                h-24 w-24 md:h-30 md:w-30 object-cover'
                                width={200}
                                height={200}
                            />
                            </div>

                            <h1>
                                <DrawerTitle className='font-bold text-center w-10/12 mx-auto'>
                                    <h3 className='select-text font-extrabold text-xl break-words
                                    sm:text-2xl my-6'>
                                        {data?.title}
                                    </h3>
                                </DrawerTitle>
                            </h1>

                            <DrawerDescription className='flex flex-col text-center mx-4 
                            sm:mx-auto sm:text-sm mb-10 h-96
                            justify-center
                             flex-nowrap w-11/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 self-center 
                             break-words'>
                                
                                <p className='select-text text-center'>
                                {data?.content}
                                </p>
                                
                                </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className='bg-black/60'>
                        <DrawerClose className="h-14 text-xl mb-4 border-solid border-2 border-cyan-900/0
                        border-red-white font-bold w-10/12 md:w-8/12 xl:w-5/12 self-center
                         rounded-lg bg-gradient-to-r from-blue-700/40 via-cyan-500/70 to-blue-700/40
                         cursor-pointer hover:brightness-125">
                    Close
                </DrawerClose>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer >
            </div >
        </Suspense>
    );
};

export default CustomDrawer;