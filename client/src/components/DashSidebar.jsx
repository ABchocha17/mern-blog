import {Sidebar} from 'flowbite-react'
import { HiUser,HiArrowSmRight } from "react-icons/hi";
import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-72'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboad?tab=profile'> <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} lablecolor='dark' as="div" > profile </Sidebar.Item> </Link>
          <Link to='/'> <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' as="div" >Sign Out</Sidebar.Item> </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
