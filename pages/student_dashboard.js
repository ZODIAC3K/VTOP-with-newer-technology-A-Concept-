import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.js"
import Main_card_student from "../components/main_card_student.js"
import cookieCutter from 'cookie-cutter' 
import { useRouter } from 'next/router.js';

export default function student_dashboard() {
  const router = useRouter()
  const [dataResponse, setdataResponse] = useState([])

    useEffect(() => {
        function isPromise(p) {
          if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
          }
        
          return false;
        }
        async function idCookie(){
          const user = JSON.parse(cookieCutter.get('user_details'))
          const query = `SELECT * FROM users WHERE email = '${user.email}' AND password = '${user.password}';`

          const endpoint = '/api/getdata'
          const options = {
              method: "post",
              body : query
          }
          const response = await fetch(endpoint, options);
          const res = await response.json()
          
          while (isPromise(res[0]))
          
          cookieCutter.set('user',res[0])
        }
        async function getPageData() {
          if(cookieCutter.get('user_details')){
            try {
              const user = JSON.parse(cookieCutter.get('user'))
              const query = `SELECT * FROM users WHERE uid = '${user.uid}';`
              const endpoint = '/api/getdata'
              const options = {
                  method: "post",
                  body : query
              }
              const response = await fetch(endpoint, options);
              const res = await response.json()
              setdataResponse(res)
            } catch (err) {
              return
            }
            
          } else {
            router.push('/')
          }
        }
        idCookie();
        setTimeout(()=>{getPageData()},2000); // quickfix with delay
    },[])
  
  return (
    <div className='flex flex-col min-h-screen bg-white text-black'>
      <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
        <Navbar/>
        <Main_card_student data={dataResponse} image={'/xyz.png'}/>
      </div>
    </div>
  )
}
