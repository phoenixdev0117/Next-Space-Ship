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
    email: z.string().min(2, {
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
            email: "",
            password: "",
        },
    });

    const router = useRouter();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values.email, values.password)
            const res = await signInWithEmailAndPassword(values.email, values.password);
            const userData = res?.user;

            if (res?.user) {
                console.log("User signed in successfully", res);
                const serializedUser = JSON.stringify(userData);
                localStorage.setItem('_firebaseUserEntityWithPhotoAndUsername', serializedUser);


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
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center">
                                <FormLabel>Email</FormLabel>
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
