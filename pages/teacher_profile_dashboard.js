import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Profile_teacher from "../components/profile_teacher.js"
import { useState, useEffect } from "react";
import cookieCutter from 'cookie-cutter'


export default function t_s() { 
  const [dataResponse, setdataResponse] = useState([])

  useEffect(() => {
    async function idCookie(){
      const user = JSON.parse(cookieCutter.get('user_details'))
      const query = `SELECT uid FROM users WHERE email = '${user.email}' AND password = '${user.password}';`

      const endpoint = '/api/getdata'
      const options = {
          method: "post",
          body : query
      }
      const response = await fetch(endpoint, options);
      const res = await response.json()

      setTimeout(()=>cookieCutter.set('user',JSON.stringify(res)),1000)
    }
    async function getPageData() {
      if(cookieCutter.get('user_details')){
        try {
          const user = JSON.parse(cookieCutter.get('user'))
          const query = `SELECT * FROM users WHERE uid = '${user[0].uid}';`
          const endpoint = '/api/getdata'
          const options = {
              method: "post",
              body : query
          }
          const response = await fetch(endpoint, options);
          const res = await response.json()
          setdataResponse(await res)
        } catch (err) {
          console.log(err.message)
          return
        }
        
      } else {
        router.push('/')
      }
    }
    idCookie()
    setTimeout(()=>{getPageData()}, 4000)
},[])
  
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
