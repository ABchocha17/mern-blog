import { Alert, Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
    const { currentUser } = useSelector((state) => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imgProgress, setImgProgress] = useState(null);
    const [imgError, setImgError] = useState(null);
    const filePickerRef = useRef();

    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = () => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        setImgError(null)
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImgProgress(progress.toFixed(0));
            },
            (error) => {
                if (error) {
                    setImgError('Could not upload image (file must be less than 2MB)');
                    setImgProgress(null)
                    setImageFileUrl(null)
                    setImageFile(null)
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    setImageFileUrl(downloadUrl);
                });
            }
        );
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement updating user profile data
    };

    return (
        <div className="max-w-lg mx-auto w-full">
            <h1 className="text-center text-3xl font-bold mb-5">Profile</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input type="file" hidden accept="image/*" onChange={handleImageChange} ref={filePickerRef} />

                <div className="w-32 h-32 self-center shadow-md rounded-full mb-5 cursor-pointer relative" onClick={() => filePickerRef.current.click()}>
                    {imgProgress && 
                        <CircularProgressbar value={imgProgress || 0} text={`${imgProgress}%`} strokeWidth={5} styles={{ root:{ width:'100%', height:'100%', position:'absolute', top:'0', left:'0' },path:{stroke:`rgba(62,152,199,${imgProgress/100}`}}}   />
                    }
                    <img src={imageFileUrl || currentUser.rest.profileimg} alt="user" className={`rounded-full w-full h-full border-8 border-[lightgray] object-cover object-top ${imgProgress && imgProgress<100 && 'opacity-60'}`} />
                </div>
                {imgError && <Alert color="failure" className="mb-3">{imgError}</Alert>}
                <div className="flex flex-col gap-3">
                    <TextInput type="text" id="username" placeholder="Username" defaultValue={currentUser.rest.username} />
                    <TextInput type="email" id="email" placeholder="Email" defaultValue={currentUser.rest.email} />
                    <TextInput type="password" id="password" placeholder="Password" />
                    <Button type="submit" gradientDuoTone="purpleToBlue" outline>Update</Button>
                </div>
                <div className="text-red-500 flex items-center justify-between mt-3 ">
                    <Link to="/">Delete Account</Link>
                    <Link to="/">Sign Out</Link>
                </div>
            </form>
        </div>
    );
}
