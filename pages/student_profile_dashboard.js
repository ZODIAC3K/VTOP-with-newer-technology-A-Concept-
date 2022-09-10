import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Profile_student from "../components/profile_student.js"


export default function student_profile_dashboard() { 
  return (
    
    <div className='flex flex-col bg-white text-black'>
    <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
      <Navbar/>
      <Profile_student/>
      </div>
    </div>
  )
}
