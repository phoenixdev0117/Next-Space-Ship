import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface CustomCardProps {
    data: {
        name: string;
        jutsu: string;
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
        <Card className="text-center flex-initial space-y-5 border-white 
        text-xs font-medium ease-in-out 
          flex-col w-8/10 m-1 py-1 mt-2  border-2 border-solid rounded-xl

            hover:scale-105 hover:transition-transform
          max-h-80 bg-gradient-to-r from-cyan-400/10 via-blue-900/70 to-cyan-200/15
          hover:bg-from-black hover:bg-via-red-700/50 hover:bg-to-black hover:brightness-125

          ">

            <CardHeader>
                <CardTitle className='font-extrabold'>Title of the post</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription className='text-sm font-medium'>{truncateText(data.jutsu)}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-row justify-around">
                <p className="font-extrabold text-sm">25/25/2025</p>
                <Badge className='text-sm' variant="default">{data.name}</Badge>
            </CardFooter>
        </Card >
    )
}

export default CustomCard;