import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Main_card_teacher from "../components/main_card_teacher.js"


export default function teacher_dashboard() { 
  return (
    
    <div className='flex flex-col bg-white text-black'>
    <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
      <Navbar/>
      <Main_card_teacher image={'/xyz.png'}/>
      </div>
    </div>
  )
}
