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

interface CustomCardProps {
    data: {
        name: string;
        jutsu: string;
        images: string[];
    };
}

export const CustomCard: React.FC<CustomCardProps> = ({ data }) => {

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
        <Card className="text-center flex-initial space-y-2 border-white
        text-xs font-medium ease-in-out md:w-12/12
          flex-col w-8/10 py-1 mt-2  border-2 border-solid rounded-xl
            hover:scale-100 hover:transition-transform
          h-96 bg-gradient-to-r from-cyan-400/10 via-blue-900/70
           to-cyan-200/15 sm:-mx-4 md:mx-10 lg:mx-4 sm:w-10/12 md:w-11/12
          hover:bg-from-black hover:bg-via-red-700/50 hover:bg-to-black hover:brightness-110
          w-11/12
            
          ">
            
            <CardHeader className='flex flex-row h-14 '>
                <CardTitle className='font-extrabold flex-auto'>Title of the post</CardTitle>
            </CardHeader>


            {/* This is a replication */}
            <CardContent style={{ width:'550px'}}>
            <CardDescription className='text-xs font-medium overflow-hidden xl:w-auto
            h-28 w-96 mx-auto hidden md:block'>
                {data.jutsu}
            </CardDescription>
            </CardContent>
            
            <CardContent style={{ width:'auto'}}>
            <CardDescription className='text-xs font-medium overflow-hidden
            h-28 md:w-96 xl:w-auto
            mx-auto md:hidden'>
                {data.jutsu}
            </CardDescription>
            </CardContent>




            <CardFooter className="flex flex-col-reverse sm:flex-row justify-between md:space-y-12">
                {/* Convert the date to DATE format*/}
                <p className="font-bold text-xs sm:text-sm hidden md:block mt-10">25/25/2025</p> 
                <div className='flex flex-row justify-center items-center space-x-2 lg:space-x-4
                sm:ml-40 lg:w-96 mx-auto'>

                <div className='flex flex-col sm:flex-row justify-center items-center
                lg:space-x-4
                md:mb-2 lg:w-96 -mx-16' >
                    
                <Badge className='text-xs lg:text-sm w-32 sm:w-32 md:w-44
                m-2
                 sm:max-w-96 md:font-extrabold justify-center' 
                variant="default">{data.name}</Badge>

                    <Image
                    src={data.images[0]}
                    alt={data.name + ' image'}
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