import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function Signup() {
    const naviget = useNavigate();
    const [formdata, setFormdata] = useState({})
    const [errorMasseg, setErrorMasseg] = useState(null)
    const [loding, setLoding] = useState(null)
    const handelChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() })
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!formdata.username || !formdata.email || !formdata.password) {
            return setErrorMasseg('please fill out all fields')
        }
        try {
            setLoding(true)
            setErrorMasseg(null)
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            })
            const data = await res.json();
            if (data.success === false) {
                return setErrorMasseg(data.message)
            }
            setLoding(false)
            setFormdata({})
            if (res.ok) {
                naviget("/signin")
            }
        } catch (error) {
            setLoding(false)
            setErrorMasseg(e.message);
        }
    }
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link to="/" className="text-4xl font-bold dark:text-white" ><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">AB&#39;Sahand&apos;s</span>Blog</Link>
                    <p className="text-sm mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio incidunt accusantium maiores vitae molestias culpa eius magnam, corrupti nihil?</p>
                </div>
                <div className="mt-5 md:mt-0 flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
                        <div className="">
                            <Label value="User Name" />
                            <TextInput type="text" placeholder="User Name" id="username" onChange={handelChange} />
                        </div>
                        <div className="">
                            <Label value="User Email" />
                            <TextInput type="email" placeholder="name@gamil.com" id="email" onChange={handelChange} />
                        </div>
                        <div className="">
                            <Label value="User password" />
                            <TextInput type="password" placeholder="User Password" id="password" onChange={handelChange} />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit" disabled={loding}>{loding ? (
                            <> <Spinner size='sm' /><span className="pl-3">Loding</span></>
                        ) : 'Sign Up'}</Button>
                        <OAuth />
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/signin' className="text-blue-500">Sign In</Link>
                    </div>
                    {
                        errorMasseg && (
                            <Alert className="mt-5" color='failure'>
                                {errorMasseg}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
