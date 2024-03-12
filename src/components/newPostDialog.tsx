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
                    <AlertDialogTrigger>
                        <button
                            tabIndex={0}
                            className="px-4 ml-10 py-2 font-bold rounded-xl mx-10 border-solid border-green-500/80
                            cursor-pointer  bg-gradient-to-r 
                            transition duration-300  ease-in-out from-green-800 to-green-400
                              hover:from-green-700 via-green-500 hover:to-green-300 
                              hover:bg-green-600 hover:border-cyan-100 hover:shadow-lg hover:scale-110"
                        >
                            + NewPost
                        </button>


                    </AlertDialogTrigger>

                    {(submitted === false) ? (<AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogCancel variant={'none'} className='self-end'>
                                X
                            </AlertDialogCancel>

                            <AlertDialogTitle className="text-center">
                                <p className="text-center pb-6">Write a new post</p>
                                <section aria-label="New post section">
                                    <RegisterForm setSubmitted={setSubmitted} setHasBeenSuccessful={setHasBeenSuccessful}>

                                    </RegisterForm>
                                </section>
                            </AlertDialogTitle>
                            {/* <AlertDialogDescription>
                            This action cannot be undone. This will permanently...
                        </AlertDialogDescription> */}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className='mx-auto'>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>) :
                        <AlertDialogContent className="h-36 justify-center flex flex-col text-center py-6">
                            <AlertDialogAction className=" text-sm" onClick={() => setSubmitted(false)}>
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