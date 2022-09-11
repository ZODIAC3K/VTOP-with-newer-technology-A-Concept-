import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaGoogle, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { BsMicrosoft } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import Lottie from "lottie-react";
import wampus from "../animation/wampus.json";
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter'

export default function Home() {
  const router = useRouter()

  const [failedLogin, setfailedLogin] = useState(false);

  function checkLogin(){
    if (failedLogin){
      return (
        <span>Error! Please try again</span>
      )
    } else {
      return;
    }
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    const data = {
        email: event.target.email.value,
        password: event.target.password.value
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/auth'

    const options = {
        method : 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSONdata
    }

    const response = await fetch(endpoint, options)
    const result = await response.json();

    if (result.isUser){
        cookieCutter.set('user_details', JSON.stringify({email: data.email,password: data.password}), {expires: 1 / 24})
        router.push('/student_dashboard')
        
    } else {
      setfailedLogin(true)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-5 bg-gray-100 '>
      <Head>
        <title>
          VTOP Bhopal
          <link rel="icon" href='/favicon.ico'/>
        </title>
      </Head>
      {/* Main Section */}
      <main className='flex flex-col items-center justify-center w-full flex-l px-20 text-center'>
        {/* section_left */}
        <div className='bg-blue-500  text-black rounded-3xl shadow-2xl flex flex-col md:flex-row justify-center items-center  w-2/3 max-w-4xl '> 
          <div className='md:w-3/5 md:p-20 md:rounded-l-3xl rounded-t-3xl md:rounded-r-none p-10 bg-white '>
            <div className='text-left font-bold'><span className='text-blue-500 '>VTOP</span><span className=''>&nbsp;Bhopal</span></div>
            <div className='pt-10 pb-8'>
            <h2 className='text-4xl font-bold mb-1 mt-2 text-blue-500'> Sign To An Account</h2>
            <div className='border-2 w-10 border-blue-500 inline-block'></div>
            {/* Social Login */}
            <div className='flex justify-center my-2'>
            <a href='#' className='border-2 border-gray-200 rounded-full p-2 mx-1.5'>
            <FaGoogle className='text-sm'/>
            </a>
            <a href='#' className='border-2 border-gray-200 rounded-full p-2 mx-1.5'>
            <BsMicrosoft className='text-sm'/>
            </a> 
            <a href='#' className='border-2 border-gray-200 rounded-full p-2 mx-1.5'>
            <FaFacebookF className='text-sm'/>
            </a> 
            </div>
            <p className='text-gray-400'> or you can use your email</p>
            </div>
            {/* FORM */}
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
              <div className='bg-gray-100 w-64 p-2 flex items-center m-2'>
                <FaEnvelope className='text-gray-400 m-2'/>
                <input type="email" name='email' placeholder='Email' className=' bg-gray-100 outline-none text-sm flex-1' id='email-field-login'></input>
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center m-2'>
                <RiLockPasswordFill className='text-gray-400 m-2'/>
                <input type="password" name='password' placeholder='Password' className=' bg-gray-100 outline-none text-sm flex-1' id='passworld-field-login'></input>
              </div>
              <div className='w-64 p-2 flex justify-between items-center mb-2'>
                <label className='flex items-center text-sm text-gray-600'><input type="checkbox" name='remember-pwd' className='m-1' defaultChecked></input> Remember me</label>
                <label className='flex items-center text-sm text-gray-600 hover:text-blue-500'><a href='#'>Forget Password?</a></label>
              </div>
              {checkLogin()}
              <button type="submit" className=' border-2 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-500'>Log In</button>
            </form>
          </div> 
          {/* section_right */}
          <div className='w-full md:w-2/5 sm:h-full bg-blue-500 rounded-tr-2xl md:rounded-br-2xl rounded-2xl py-36 px-12  text-white'>
          <Lottie className='md:mb-4' animationData={wampus} loop={true} />
          </div>
          </div>
      </main>
    </div>
  )
}
