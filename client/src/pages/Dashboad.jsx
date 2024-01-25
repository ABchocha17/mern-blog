import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboad() {
    const location = useLocation();
    const [tab,setTab] = useState('');
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if(tabFromUrl){
            setTab(tabFromUrl);
        }
    },[location.search])
    return (
        <div className='flex flex-col md:flex-row min-h-[69vh]'>
            {/* side bar */}
            <div className="">
                <DashSidebar />
            </div>
            {/* profile */}
            <div className="p-10">
                {tab === 'profile' && <DashProfile />}
            </div>
        </div>  
    )
}
