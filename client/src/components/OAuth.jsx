import { Button } from "flowbite-react";
import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider } from "firebase/auth";

export default function OAuth() {
    const handelGoogleClick = async()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'})
        
    }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline><AiOutlineGoogle size='24' className="me-3" onClick={handelGoogleClick} /> Continue with google</Button>
  )
}
