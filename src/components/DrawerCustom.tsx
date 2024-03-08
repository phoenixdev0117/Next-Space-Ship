import React from 'react';
import { useState, useEffect } from 'react';
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

interface CustomDrawerProps {
    title: string;
    description: string;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({ title, description }) => {


    return (
        <div className="flex flex-col justify-start items-center">
            <Drawer>
                <DrawerTrigger className='w-11/12'>
                    {/* <Button variant="outline">See more</Button> */}
                    <CustomCard title={title} description={description} />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className='h-96 flex flex-col justify-around'>
                        <DrawerTitle className='text-center'>{title}</DrawerTitle>
                        <DrawerDescription className='text-center'>{description}</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* <Button >VIEW MORE</Button> */}
                        <DrawerClose className="bg-red-700 h-12 text-xl font-bold">
                            {/* <Button variant="outline">CLOSE</Button> */}
                            CLOSE
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </div >
    );
};

export default CustomDrawer;