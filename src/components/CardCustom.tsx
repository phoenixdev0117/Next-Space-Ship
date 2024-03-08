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
    data: object;
}

export const CustomCard: React.FC<CustomCardProps> = ({ data, ...props }) => {

    return (
        <Card className="text-center flex-initial space-y-5 border-white 
        text-xs
        font-medium bg-card 
        transition duration-200 ease-in-out hover:bg-red-50
          flex-col w-8/10 m-1 py-1 mt-2  border-2 border-solid rounded-2xl">

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