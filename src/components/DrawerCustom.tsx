import React, { Suspense } from 'react';
import { useState, useRef, useEffect } from 'react';
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

interface CustomDrawerProps {
    data: {
        name: string;
        jutsu: string;
        images: string;
    };
}


export const CustomDrawer = ({ data, isHome = true }) => {
    // We solve this when the firebase posts are done
    // : React.FC<CustomDrawerProps> 

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
                    <DrawerTrigger className='w-12/12 md:w-12/12 lg:max-w-4xl'>
                        <CustomCard data={data}/>
                    </DrawerTrigger>
                    <DrawerContent >
                        <DrawerHeader className='h-screen flex flex-col justify-around
                        px-0
                         bg-black/60 overflow-y-auto pt-24'>

                             <div className='flex flex-col justify-evenly space-y-6'>
                            <DrawerTitle className='pt-6 font-bold text-center'>
                                <h3 className='select-text'>
                                Post made by {data.name}
                                </h3>
                            </DrawerTitle>
                            <Image
                                src={data.images[0]}
                                alt={data.name + ' image'}
                                className='rounded-3xl self-center 
                                
                                h-24 w-24 md:h-30 md:w-30 object-cover'
                                width={200}
                                height={200}
                            />
                            </div>

                            <h1>
                                <DrawerTitle className='font-bold text-center -my-6 '>
                                    <h3 className='select-text font-extrabold text-xl sm:text-2xl'>
                                        Title of the post
                                    </h3>
                                </DrawerTitle>
                            </h1>

                            <DrawerDescription className='text-center mx-6 sm:mx-4
                            text-xs sm:text-sm mb-10
                             flex-wrap sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 self-center'>
                                
                                <p className='select-text'>
                                {data.jutsu}
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