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
    title: string;
    description: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ title, description, ...props }) => {
    return (
        <Card style={{ backgroundColor: 'var(--card)' }}

            className="text-center flex-initial space-y-5
          flex-col w-8/10 m-1 py-6 my-4 border border-solid rounded-2xl">
            <CardHeader >
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className="flex flex-row justify-around">
                <p>Card Footer</p>
                <Badge variant="default">Badge</Badge>
            </CardFooter>
        </Card>
    )
}

export default CustomCard;