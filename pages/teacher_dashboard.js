import Head from 'next/head'
import React, { useState,useEffect } from "react";
import Navbar from "../components/navbar.js"
import Main_card_teacher from "../components/main_card_teacher.js"
import { useRouter } from 'next/router.js';
import cookieCutter from 'cookie-cutter'


export default function teacher_dashboard() { 
  const router = useRouter()
  const [dataResponse, setdataResponse] = useState([])
  function putData(field) {
      try {
        console.log(dataResponse[0])
          const text = dataResponse[0][field]
          return (
              text
          )
      } catch (err) {
          return   
      }
  }

    useEffect(() => {
        function isPromise(p) {
          if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
          }
        
          return false;
        }
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
              console.log(res)
            } catch (err) {
              console.log(err.message)
              return
            }
            
          } else {
            router.push('/')
          }
        }
        idCookie()
        getPageData()
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
      <Main_card_teacher image={'/xyz.png'}/>
      </div>
    </div>
  )
}
