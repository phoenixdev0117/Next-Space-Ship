'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { getUsernameInfo } from '@/lib/getUsernameInfo';
import { logOutFromAccount } from '@/lib/logOutFromAccount';
import { useRouter } from "next/navigation";
import { getImageAverageColor } from '@/lib/getImageAverageColor';
import { UserSheet } from '@/components/UserSheet';

export default function AccountPage() {

    const [userInfo, setUserInfo] = useState({});
    const [photoAvgColor, setPhotoAvgColor] = useState('');
    const router = useRouter();

    const handleLogOut = async () => {
        const res = await logOutFromAccount();
        if (res) {
            router.push('/');
            setUserInfo({});
        }
        else {
            console.log('Error logging out');
        }
    }


    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await getUsernameInfo();
            const { photoURL, uid, email, displayName } = userInfo || {}
            setUserInfo(userInfo);
        };
        fetchUserInfo();

        if (!userInfo) {
            router.push('/Login');
        }

        return () => {
            // cleanup
        };
    }, []);

    useEffect(() => {

        if (!userInfo) {
            router.push('/Login');
        }

        const getColor = async () => {
            if (!userInfo?.photoURL) return;
            const photoAvgColor = await getImageAverageColor(userInfo?.photoURL);
            console.log('Photo average color:', photoAvgColor);
            setPhotoAvgColor(photoAvgColor);
        };
        getColor();

    }

        , [userInfo]);


    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-7/12 md:w-4/12  pb-10">
                    <section className={`flex flex-col text-center m-1 gap-2 py-6 my-6
                    bg-color-body-general border-2 border-solid border-white/50 rounded-xl
                    ${(photoAvgColor) !== '' ? `border-${photoAvgColor}-400` : ''}
                    `}
                        style={{
                            backgroundColor: `${(photoAvgColor) !== '' ?
                                (`rgba(${photoAvgColor[0]},${photoAvgColor[1]},${photoAvgColor[2]},0.8)`)
                                : ''}`,
                            borderColor: `${(photoAvgColor) !== '' ?
                                (`rgba(${photoAvgColor[0]},${photoAvgColor[1]},${photoAvgColor[2]},1)`)
                                : ''}`
                        }}>

                        {userInfo?.displayName ? (
                            <div>
                                <Button variant={"secondary"} className="font-bold text-xl mx-auto my-6"
                                >Welcome {userInfo?.displayName}</Button>

                                <div className='h-32 w-32 flex flex-col justify-center mx-auto'>
                                    {(userInfo?.photoURL) !== '' ? (


                                        <UserSheet>
                                        </UserSheet>
                                        // <Image
                                        //     className="border-2 border-solid "
                                        //     style={{
                                        //         borderColor: `${(photoAvgColor) !== '' ?
                                        //             (`rgba(${255 - photoAvgColor[0] * 0.5},
                                        //                 ${255 - photoAvgColor[1] * 0.5},
                                        //                 ${255 - photoAvgColor[2] * 0.4},
                                        //                 1)`)
                                        //             : ''}`

                                        //     }}
                                        //     src={userInfo?.photoURL}
                                        //     alt='User Profile Picture'
                                        //     width={120} height={120}>
                                        // </Image>
                                    )

                                        :
                                        <Image
                                            className="border-2 border-solid border-white"
                                            src={'/logo.jpeg'}
                                            alt='Default profile picture'
                                            width={120} height={120}>
                                        </Image>
                                    }
                                </div>

                                <div className="flex flex-row justify-center py-4">
                                    <Button onClick={() => handleLogOut()}
                                        className='py-5 flex' variant={"destructive"}>
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            // <Link href="/Login">
                            //     <button className="text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 
                            //     rounded-md text-sm font-medium">Login or Register</button>
                            // </Link>

                            //TODO Fix this (just me, AESMatias)
                            null

                        )

                        }


                    </section>
                </div>
            </div >

        </main >

    );
}
