import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Profile_teacher from "../components/profile_teacher.js"
import React, { useState, useEffect } from "react";
import cookieCutter from 'cookie-cutter'


export default function t_s() { 
  const [dataResponse, setdataResponse] = useState([])

  useEffect(() => {
      async function idCookie(){
        const user = JSON.parse(cookieCutter.get('user_details'))
        const query = `SELECT * FROM user.user WHERE email = '${user.email}' AND password = '${user.password}';`

        const endpoint = '/api/getdata'
        const options = {
            method: "post",
            body : query
        }
        const response = await fetch(endpoint, options);
        const res = await response.json()
        cookieCutter.set('user_id',res[0].reg_no)
      }
      async function getPageData() {
          const user = JSON.parse(cookieCutter.get('user_id'))
          const query = `SELECT * FROM user.user WHERE reg_no = ${user};`
          const endpoint = '/api/getdata'
          const options = {
              method: "post",
              body : query
          }
          const response = await fetch(endpoint, options);
          const res = await response.json()
          setdataResponse(res)
      }
      idCookie();
      setTimeout(()=>getPageData(),1000); // quickfix with delay
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
