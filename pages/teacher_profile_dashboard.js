import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Profile_teacher from "../components/profile_teacher.js"


export default function teacher_profile_dashboard() { 
  return (
    
    <div className='flex flex-col bg-white text-black'>
    <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
      <Navbar/>
      <Profile_teacher/>
      </div>
    </div>
  )
}
