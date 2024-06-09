'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { RegisterForm } from '@/components/newPostForm'
import { useState } from "react";


export function NewPostDialog() {

    const [submitted, setSubmitted] = useState(false);
    const [hasBeenSuccessful, setHasBeenSuccessful] = useState(false);

    return (
        <>
            {
                <AlertDialog>
                    <AlertDialogTrigger >
                        <button
                            tabIndex={0}
                            className="px-6 ml-10 py-2 font-bold rounded-xl w-42 mx-10 border-green-800
                            cursor-pointer  bg-gradient-to-r border-2
                            transition duration-75  ease-in-out from-green-400 to-green-800
                              hover:from-green-800 hover:to-green-400
                              hover:bg-green-600 hover:border-cyan-100 hover:shadow-lg hover:scale-110
                              hover:brightness-125"
                        >
                            + NewPost
                        </button>


                    </AlertDialogTrigger>

                    {(submitted === false) ? (<AlertDialogContent>
                        <AlertDialogHeader className="">
                            <AlertDialogCancel className='self-end'>
                                x
                            </AlertDialogCancel>

                            <AlertDialogTitle className="text-center">
                                <p className="text-center pb-6">Write a new post</p>
                                <section aria-label="New post section">
                                    <RegisterForm
                                    setSubmitted={setSubmitted} setHasBeenSuccessful={setHasBeenSuccessful}>

                                    </RegisterForm>
                                </section>
                            </AlertDialogTitle>
                            {/* <AlertDialogDescription>
                            This action cannot be undone. This will permanently...
                        </AlertDialogDescription> */}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className='flex-auto'>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>) :
                        <AlertDialogContent className="h-36 justify-center flex flex-col text-center py-6">
                            <AlertDialogAction className="text-sm" onClick={() => setSubmitted(false)}>
                                {hasBeenSuccessful ? 'Your post has been posted sucessfully'
                                    : 'An error has been occured, please try again'}
                            </AlertDialogAction>
                        </AlertDialogContent>}

                </AlertDialog>
            }
        </>
    )
}

export default NewPostDialog;