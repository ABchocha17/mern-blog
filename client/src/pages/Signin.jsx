import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { signInSuccess,signInStart,signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function Signin() {
    const naviget = useNavigate();
    const [formdata, setFormdata] = useState({})
    const {error:errorMasseg,loding} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const handelChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() })
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!formdata.email || !formdata.password) {
            return dispatch(signInFailure("please fill out all fields"));
        }
        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            })
            const data = await res.json();
            if (data.success === false) {
               return dispatch(signInFailure(data.message))
            }
            setFormdata({})
            if (res.ok) {
                dispatch(signInSuccess(data))
                naviget("/")
            }
        } catch (error) {
            dispatch(signInFailure(error.message))
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
                            <Label value="User Email" />
                            <TextInput type="email" placeholder="name@gamil.com" id="email" onChange={handelChange} />
                        </div>
                        <div className="">
                            <Label value="User password" />
                            <TextInput type="password" placeholder="********" id="password" onChange={handelChange} />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit" disabled={loding}>{loding ? (
                            <> <Spinner size='sm' /><span className="pl-3">Loding</span></>
                        ) : 'Sign In'}</Button>
                        <OAuth />
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Dont Have an account?</span>
                        <Link to='/signup' className="text-blue-500">Sign Up</Link>
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
