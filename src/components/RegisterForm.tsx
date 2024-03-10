"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebaseConfig";
import { updateUserInfo } from "@/lib/updateUserInfo";


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email().min(6, {
        message: "Invalid Email.",
    }),
    password: z.string().min(7, {
        message: "Password must be at least 6 characters.",
    })
})

export function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // const immediatelyChangeDisplayName = async (user, newDisplayName) => {
    //     try {
    //         updateProfile(user, {
    //             displayName: newDisplayName,
    //             photoURL: "https://pbs.twimg.com/media/GBGaycGXMAAV-2-?format=jpg&name=large", // Default profile picture
    //         }).then(() => {
    //             console.log('displayName has been changed')
    //             return user;
    //         }).catch((error) => {
    //             console.log('Error at immediatelyChangeDisplayName/updateProfile:', error);
    //             return null
    //         });
    //     } catch (error) {
    //         console.log('Error at immediatelyChangeDisplayName:', error);
    //         return null
    //     }
    // }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        const nicknameToSet = `${values.username}`;
        try {
            const res = await createUserWithEmailAndPassword(values.email, values.password)
            // We need to change the displayName immediately after the user account is created, otherwise
            // we need to cancel the entire account creation,we don't want users without their @Username.
            await updateUserInfo(res?.user, nicknameToSet);

        } catch (error) {
            console.log('Error at register', error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center">
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input className="text-center w-8/12 sm:w-80 mx-auto" placeholder="Your username" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input className="text-center w-8/12 sm:w-80 mx-auto" type="password" placeholder="Your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className="text-center w-8/12 sm:w-80 mx-auto" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                We never send you spam.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )


}

export default RegisterForm;