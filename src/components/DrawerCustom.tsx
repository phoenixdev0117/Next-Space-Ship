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


export const CustomDrawer = ({ data }) => {
    // We solve this when the firebase posts are done
    // : React.FC<CustomDrawerProps> 

    return (
        <Suspense fallback={
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-4 border-cyan-500">
                </div>
                <span className="my-10 text-xl">Loading ...</span>
            </div>
        }>
            <div className="flex flex-col justify-start items-center">

                <Drawer>
                    <DrawerTrigger className='w-11/12'>
                        <CustomCard data={data} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className='h-96 flex flex-col justify-around'>

                            <DrawerTitle className='text-center'>{data.name}</DrawerTitle>


                            <Image
                                src={data.images[0]}
                                alt={data.name + ' image'}
                                className='rounded-3xl self-center'
                                width={200}
                                height={200}
                            />
                            <DrawerDescription className='text-center'>{data.name}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose className="bg-red-800 h-12 text-xl mb-4 border-solid border-2 border-red-400
                        font-bold w-10/12 md:w-8/12 xl:w-6/12 self-center rounded-lg">
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