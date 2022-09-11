import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.js"
import Main_card_student from "../components/main_card_student.js"
import cookieCutter from 'cookie-cutter' 
import { useRouter } from 'next/router.js';

export default function student_dashboard() {
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
              const query = `SELECT u.uid, u.name, vi.proctorID, vi.programmeChairID, vi.deanID FROM vtop.users as u LEFT JOIN vtop.vitInfo AS vi ON u.uid = vi.uid WHERE u.uid = "${user[0].uid}";`
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
    <div className='flex flex-col min-h-screen bg-white text-black'>
      <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
        {}
        <Navbar isStudent={putData('sBool')}/>
        <Main_card_student data={dataResponse} image={'/xyz.jpg'}/>
        
      </div>
    </div>
  )
}
