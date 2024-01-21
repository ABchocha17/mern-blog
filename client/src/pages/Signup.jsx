import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link to="/" className="text-4xl font-bold dark:text-white" ><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">AB-Sahand's</span>Blog</Link>
                    <p className="text-sm mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio incidunt accusantium maiores vitae molestias culpa eius magnam, corrupti nihil?</p>
                </div>
                <div className="mt-5 md:mt-0 flex-1">
                    <form className="flex flex-col gap-4">
                        <div className="">
                            <Label value="User Name" />
                            <TextInput type="text" placeholder="User Name" id="username" />
                        </div>
                        <div className="">
                            <Label value="User Email" />
                            <TextInput type="email" placeholder="name@gamil.com" id="email" />
                        </div>
                        <div className="">
                            <Label value="User Name" />
                            <TextInput type="password" placeholder="User Password" id="password" />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/signin' className="text-blue-500">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
