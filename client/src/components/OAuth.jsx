import { Button } from "flowbite-react";
import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import {app} from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


export default function OAuth() {
  const auth = getAuth(app)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handelGoogleClick = async()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'})
        try {
          const resultFromGooglr = await signInWithPopup(auth,provider);
          const res = await fetch('/api/auth/google', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username:resultFromGooglr.user.displayName,
                email:resultFromGooglr.user.email,
                profileimg:resultFromGooglr.user.photoURL,
              })
          })
          const data = await res.json();
          if(res.ok){
            dispatch(signInSuccess(data));
            navigate("/")
          }

        } catch (error) {
          console.log(error);
        }
    }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline><AiOutlineGoogle size='24' className="me-3" onClick={handelGoogleClick} /> Continue with google</Button>
  )
}
