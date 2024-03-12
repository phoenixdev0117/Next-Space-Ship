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

    return (
        <Card className="text-center flex-initial space-y-5 border-white 
        text-xs font-medium transition duration-100 ease-in-out 
          flex-col w-8/10 m-1 py-1 mt-2  border-2 border-solid rounded-xl
          hover:bg-from-black hover:bg-via-red-700/50 hover:bg-to-black hover:scale-105
          ">

            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.jutsu}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className="flex flex-row justify-around">
                <p>Card Footer LEFT</p>
                <Badge className='text-sm' variant="default">{data.name}</Badge>
            </CardFooter>
        </Card >
    )
}

export default CustomCard;