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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { postNewPostFirebase } from "@/lib/newPost"
// import { SelectCategory } from "@/components/newPostSelect"
import { Link } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { redirect, useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { CheckBoxSimple } from "@/components/CheckBoxSimple"
import {getUsernameInfo} from '@/lib/getUsernameInfo'

const FormSchema = z.object({
    title: z.string().min(1, {
        message: "Title must be at least 1 characters.",
    }),
    content: z.string().min(10, {
        message: "Content must be at least 10 characters.",
    }),
    category: z.string().refine((value) => value !== "", {
        message: "Select a category.",
        // path: ["category"],
    }),
    userWantsToSeeThePost: z.boolean().optional()

});

interface DataAfterPost {
    fromUserId: string;
    postFinalName: string;
    postDate: Date;
    title: string;
    content: string;
    category: string;
    usernameToDisplay: string;
}

export function RegisterForm({ setSubmitted, setHasBeenSuccessful }) {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            content: "",
            category: "Default",
        },
    });

    const router = useRouter();
    const [userWantsToSeeThePost, setUserWantsToSeeThePost] = useState(true);



    const navigateToPostById = async (postObject: DataAfterPost) => {        
        const userInfo = await getUsernameInfo();
        const titleOfPost = postObject.postFinalName;
        // titleOfPost = titleOfPost.trim();
        // titleOfPost = titleOfPost.replace(/\s+/g, '-'); // Replaces all spaces with hyphens.
        
        router.push(`/post/${titleOfPost}`);
    }

    async function onSubmit(values: z.infer<typeof FormSchema>) {

        const [hasBeenPosted, data] = await postNewPostFirebase(values);


        setSubmitted(true)
        if (hasBeenPosted) {
            setHasBeenSuccessful(true)
            if (userWantsToSeeThePost) {
                navigateToPostById(data);
            }

            toast({
                title: "Your post has been posted:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                    </pre>
                ),
            })
        }
        else {
            setHasBeenSuccessful(false)
            toast({
                title: "Sorry, there was an error posting your post.",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                    </pre>
                ),
            })
        }
    }

    return (
        <section className=''>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col text-center w-full ">

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center ">
                                <FormLabel >Title</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-center w-8/12 sm:w-80 mx-auto"
                                        placeholder="Enter the title of your post"
                                        alt="Name of the post" autoFocus
                                        {...field} />
                                </FormControl>
                                {/* <FormMessage /> */}
                            </FormItem>
                        )}
                    />

                    {/* <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="flex flex-col items-center">
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange}
                                    defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent defaultValue="Post">
                                        <SelectItem className="bg-slate-950" value="Post">Post</SelectItem>
                                        <SelectItem value="Question">Question</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center">
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <textarea
                                        className="text-center resize-y
                                    w-full mx-auto border max-h-80
                                     border-gray-300 bg-black
                                     rounded-md p-2 min-h-40"
                                        placeholder="Write your post content here"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    Your post must comply with the policies of the forum (TODO: Set the link).
                                    <Link href="/policy">
                                        <span className="flex-shrink-0 bg-red-500 h-20 w-20">
                                            aaasfasffasasf
                                        </span>
                                    </Link>
                                </FormDescription>
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="userWantsToSeeThePost"
                        defaultValue={userWantsToSeeThePost}
                        render={({ field }) => (
                            <FormItem>
                                <CheckBoxSimple isChecked={userWantsToSeeThePost} setIsChecked={setUserWantsToSeeThePost}>

                                </CheckBoxSimple>
                            </FormItem>
                        )}>

                    </FormField>
                    <button 
                    type="submit"
                    className="cursor-pointer rounded-md h-12 bg-gradient-to-r 
                    text-white font-extrabold transition 
                    duration-2000 ease-out from-green-950 via-green-500 to-green-950 
                    hover:from-green-900 hover:to-green-400
                    hover:bg-green-600 hover:shadow-lg hover:brightness-125
                    active:scale-90 active:brightness-150 hover:scale-105 
                     animate-brightness-125 hover:animate-none hover:duration-200"
                    >
                    Submit
                    </button>

                </form>
            </Form>
        </section>
    );
}

export default RegisterForm;
