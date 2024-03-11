'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebaseConfig";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(7, {
        message: "Password must be at least 6 characters.",
    }),
});

export function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const router = useRouter();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values.username, values.password)
            const res = await signInWithEmailAndPassword(values.username, values.password);

            if (res?.user) {
                console.log("User signed in successfully", res.user);
                localStorage.setItem('_firebaseUserEntityWithPhotoAndUsername', JSON.stringify(res.user));
                router.push('/');
            }
        } catch (error) {
            console.error("Error signing in:", error);
            // localStorage.removeItem('_firebaseUserEntityWithPhotoAndUsername');
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        // console.log(values);
        handleSignIn(values);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center">
                                <FormLabel>Username</FormLabel>
                                <FormControl >
                                    <Input className=" text-center w-8/12 sm:w-80 mx-auto" placeholder="Your username" {...field} />
                                </FormControl>
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
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </>
    );
}

export default LoginForm;
