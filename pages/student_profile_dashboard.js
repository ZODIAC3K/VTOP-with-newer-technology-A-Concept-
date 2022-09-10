import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Profile_teacher from "../components/profile_student.js"


export default function t_s() { 
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
