import Head from 'next/head'
import React from "react";
import Navbar from "../components/navbar.js"
import Attendance_student_table from "../components/attendance_student_table.js"
import Academics_menu_student from "../components/academics_menu_student.js"
import Student_class_table from "../components/student_class_table.js"



export default function student_academics_dashboard(){ 
  return (
    <div className='flex flex-col bg-white text-black'>
    <Head>
        <title>
          VTOP Dashbard
        </title>
      </Head>
      <div className='flex'>
        <Navbar/>     {/* NAV BAR */}
        <Academics_menu_student/> {/* go into the component in it you will find 2 components when every the page loads none of the components are shown but whne we click on details of attendance it will show is attendance table and when we click details of time table it will simpley show us time table */}
        </div>
      </div>
  )
}
