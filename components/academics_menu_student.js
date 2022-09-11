import Attendance_student_table from "../components/attendance_student_table.js"
import Student_class_table from "../components/student_class_table.js"


export default function Academics_menu_student(){ 
  return (
    <div className='flex flex-col bg-white text-black'>
      <div className='flex'>
        <div className='flex m-20 flex-col w-full justify-center items-center'>
        <div className="flex">
        <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Attendance</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                        <div className="mt-2 flex flex-col justify-center items-center">
                            <div className=" text-blue-500 text-2xl font-bold flex justify-center p-1 mb-4">
                                <span>[&nbsp; XX / YY &nbsp;]</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                            <label className="text-md border-2 border-white text-white font-bold bg-blue-500 py-2 px-4  rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 ">Details</label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col justify-center items-center">
                            <span className="italic text-2xl">FFCS</span>
                            <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                        </div>
                        <div className="font-normal mt-1 flex flex-col p-2">
                            <div className=" flex flex-col justify-center items-center">
                                <a href='#'><label className=" font-semibold text-lg mb-2 cursor-pointer text-blue-500">Subject List</label></a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-md border-2 border-white text-white font-bold bg-blue-500 py-2 px-4  rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 ">Details</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                        <div className="flex flex-col mt-4">
                            <div className="flex flex-col justify-center items-center">
                                <span className="italic text-2xl">Time Table</span>
                                <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                            </div>
                            <div className="font-normal mt-1 flex flex-col p-2">
                              <div>
                                  <label className="text-md mx-2 font-bold">Mon: &nbsp; <span className='font-normal text-blue-500'>X</span></label>
                                  <label className="text-md mx-2 font-bold ">Tue: &nbsp; <span className='font-normal text-blue-500'>X</span></label>
                                  <label className="text-md mx-2 font-bold">Wed: &nbsp; <span className='font-normal text-blue-500'>X</span></label>
                              </div>
                              <div>
                                  <label className="text-md mx-2 font-bold">Thu: &nbsp; <span className='font-normal text-blue-500'>X</span></label>
                                  <label className="text-md mx-2 font-bold">Fri: &nbsp; <span className='font-normal text-blue-500'>X</span></label>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="text-md border-2 border-white text-white font-bold bg-blue-500 py-2 px-4  rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 ">Details</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Attendance_student_table/>
              <Student_class_table/>
            </div>
        </div>
      </div>
    </div>
  )
}
