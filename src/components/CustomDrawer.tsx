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

interface CustomDrawerProps {
    title: string;
    description: string;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({ title, description }) => {


    return (
        <div className="flex justify-center items-center bg-blue-500 m-sm-4 p-1">
            <Drawer>
                <DrawerTrigger>
                    {/* <Button variant="outline">See more</Button> */}
                    <span>Open the custom drawer</span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {/* <Button >VIEW MORE</Button> */}
                        <DrawerClose>
                            {/* <Button variant="outline">CLOSE</Button> */}
                            CLOSE
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default CustomDrawer;