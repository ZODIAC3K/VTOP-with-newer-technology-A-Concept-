import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Main_card_student from "../components/main_card_student.js"


export default function teacher_dashboard() { 
  return (
    
    <div className='flex flex-col min-h-screen bg-white text-black'>
    <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
      <Navbar/>
      <Main_card_student image={'/xyz.png'}/>
      </div>
    </div>
  )
}
