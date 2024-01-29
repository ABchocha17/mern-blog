import { Button, TextInput } from 'flowbite-react'
import { useState } from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function DashProfile() {
    const {currentUser } = useSelector((state)=> state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const handleImageChange = (e) =>{
        const file = setImageFile(e.target.files[0]);
        console.log(file);
        if(file){
            setImageFile(file); 
            setImageFileUrl(URL.createObjectURL(file));
            console.log(setImageFileUrl);
        }
    }
    console.log(imageFileUrl);  
    console.log(imageFile);
  return (
    <div className='max-w-lg mx-auto w-full'>
        <h1 className='text-center text-3xl font-bold mb-5'>Profile</h1>
        <form className='flex flex-col'>
            <input type='file' accept='image/*' onChange={handleImageChange} />
            <div className="w-32 h-32 self-center shadow-md rounded-full mb-5">
                <img src={currentUser.rest.profileimg} alt="user" className='rounded-full w-full h-full border-8 border-[lightgray]'  />
            </div>
            <div className="flex flex-col gap-3">
                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.rest.username} />
                <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.rest.email} />
                <TextInput type='password' id='password' placeholder='password' />
                <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
            </div>
            <div className="text-red-500 flex items-center justify-between mt-3 ">
                <Link to='/'>Delete Account</Link>
                <Link to='/'>Sighn Out</Link>
            </div>
        </form>
    </div>
  )
}
