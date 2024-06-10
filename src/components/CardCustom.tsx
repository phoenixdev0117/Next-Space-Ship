'use client'
// TODO: We need to make this component use client, but the image is not being displayed
// because of the useStaticQuery hook. We need to find a way to make it work.
// Ocurrs to me that we can create a new child component that use the useState hook.
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { useEffect, useState, useLayoutEffect } from 'react';
import {retrieveAvatar} from '@/lib/retrieveAvatar'


export const CustomCard: React.FC<CustomCardProps> = ({ data, avatarAuthorURL }) => {


    const [avatarAuthor, setAvatarAuthor] = useState<string>('/logo.jpeg');
    const [postDateString, setPostDateString] = useState<string>('01/01/2000');

    // let avatarAuthorURL = '/logo.jpeg';

    // const downloadAvatar = async (userId) => {
        // const avatar = await retrieveAvatar(userId);
        // return avatar;
    // }

    // downloadAvatar(data?.fromUserId).then((avatar) => {
    //     if (data?.fromUserId !== null && data?.fromUserId !== undefined){
    //         avatarAuthorURL = avatar;
    //     }
    //     else {
    //         avatarAuthorURL = '/logo.jpeg';
    //     }
    // });
    useLayoutEffect(() => {
        if (data?.fromUserId !== null) {
            const avatarFunc = async (userId) =>{
                const retrievedAvatar = await retrieveAvatar(data?.fromUserId );
                if (retrievedAvatar === null) {
                    setAvatarAuthor('/logo.jpeg');
                    return '/logo.jpeg';
                }
                setAvatarAuthor(retrievedAvatar);
                console.log('JAJAJA',data?.title?.length,data?.title)
                return retrievedAvatar;
            }

            avatarFunc(data?.fromUserId );
        }
        const postDateString = data?.postDate?.date?.slice(0, 10) || '01/01/2000';
        if (postDateString.lenght > 8) {
            setPostDateString(postDateString);
        }
    });


    function truncateText(text: string) {
        
        if (typeof text === 'undefined') return '';

        const maxLength = 5;
        const lengthOfText = text.length;

        if (lengthOfText> maxLength) {
            text = text.slice(0, maxLength) + "...";
            return text;
        }
        return text;
      }

    return (
        <Card className="select-none text-center flex-initial space-y-2 border-white
        text-xs font-medium ease-in-out
          flex-col w-8/10 py-1 mt-2  border-2 border-solid rounded-xl
            hover:scale-100 hover:transition-transform
          sm:h-96 h-[335px] bg-gradient-to-r from-cyan-400/10 via-blue-900/70
           to-cyan-200/15 sm:-mx-4 md:mx-10 lg:mx-4 sm:w-10/12 md:w-12/12
          hover:bg-from-black hover:bg-via-red-700/50 hover:bg-to-black hover:brightness-110
          w-11/12
          ">
            
            <CardHeader className='flex flex-row h-14 w-auto sm:w-[440px]
            md:w-[600px] lg:w-[650px] '>
                
                <CardTitle className='font-bold sm:font-extrabold break-words 
                text-lg sm:text-xl lg:text-2xl justify-center  items-center
                 text-center mx-auto w-8/12 flex flex-wrap h-14 
                 overflow-y-hidden
                 overflow-x-clip
                 ' 
                >
                    {
                data?.title?.length > 30 ? `${data?.title?.slice(0,30)}...`
                : data?.title
                }
                    </CardTitle>
            </CardHeader>


            {/* This is a replication */}
            <CardContent style={{ width:'550px'}} className="mx-auto">
            <CardDescription className='text-xs font-medium overflow-hidden xl:w-auto
            h-28 w-96 mx-auto hidden md:block  break-words sm:my-10 '>
                {
                data?.content?.length > 400 ? `${data?.content?.slice(0,400)}...`
                : data?.content
                }
            </CardDescription>
            </CardContent>
            
            <CardContent style={{ width:'auto'}}>
            <CardDescription className='text-xs font-medium overflow-hidden break-words
            h-28 sm:w-96 xl:w-auto
            mx-auto md:hidden'>
                {
                data?.content?.length > 400 ? `${data?.content?.slice(0,400)}...`
                : data?.content
                }
            </CardDescription>
            </CardContent>




            <CardFooter className="flex flex-col-reverse sm:flex-row justify-between md:space-y-12">
                {/* Convert the date to DATE format*/}
                <p className="font-bold text-xs sm:text-sm hidden md:block mt-6">
                    {postDateString}
                    </p> 
                <div className=' flex flex-row justify-center items-center space-x-2 lg:space-x-4
                sm:ml-40 lg:w-96 mx-auto'>

                <div className='flex md:-mt-32 flex-col sm:flex-row justify-center 
                items-center lg:space-x-4 lg:mr-48
                md:mb-2 lg:w-96 -mx-16' >
                    
                <Badge className='text-xs lg:text-sm w-32 sm:w-32 md:w-44
                m-2
                 sm:max-w-96 md:font-extrabold justify-center' 
                variant="default">
                    {
                    data?.usernameToDisplay?.length > 15 ? `${data?.usernameToDisplay?.slice(0,15)}...`
                    : data?.usernameToDisplay
                    }
                </Badge>

                    <Image
                    src={`${avatarAuthor}` ||'/logo.jpeg'}
                    alt={'Avatar Image'}
                    className='border-white/80 border-2
                    rounded-full self-center object-cover 
                    w-10 h-10
                    sm:w-14 sm:h-14'
                    width={70}
                    height={70}
                />
                    </div>
                </div>
            </CardFooter>
        </Card >
    )
}

export default CustomCard;