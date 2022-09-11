
import { BsSearch } from "react-icons/bs";

export default function Student_class_table({children}) {
    return (
        <div className="flex h-fit">
            <div className="shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in p-4 w-full">
                
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Time Table</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal flex flex-col pt-2">
                        <div className=" flex flex-col justify-center items-center">
                            <a href='./student_table.png' download><label className=" font-semibold text-lg cursor-pointer text-blue-500">Download</label></a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <table className="">
                        <thead className= "border-b-2 border-blue-500">
                            <tr className="font-normal">
                                <th className="py-3 px-8">&nbsp;</th>
                                <th className="py-3 px-8">8:30 - 10:00</th>
                                <th className="py-3 px-8">10:05 - 11:35</th>
                                <th className="py-3 px-8">11::40 - 01:10</th>
                                <th className="py-3 px-8">01:15 - 02:50</th>
                                <th className="py-3 px-8">02:50 - 04:20</th>
                                <th className="py-3 px-8">04:25 - 05:55</th>
                                <th className="py-3 px-8">06:00 - 07:30</th>
                                <th className="py-3 px-8">&nbsp;</th>
                            </tr>
                        </thead>
                        <thead className="">
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">Mon</th>
                                <th className="py-4 px-8 font-normal bg-red-500 text-white italic">CSE2003 &nbsp; A110</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-yellow-400 text-white italic">CAO4001 &nbsp; AB303</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-violet-400 text-white italic">MAT3001 &nbsp; AB412</th>
                                <th className="py-4 px-8 font-normal bg-green-400 text-white italic">HUM2001 &nbsp; AB502</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">&nbsp;</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">Tue</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-violet-400 text-white italic">MAT3001 &nbsp; AB412</th>
                                <th className="py-4 px-8 font-normal bg-blue-400 text-white italic">ENG1001 &nbsp; AB330</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">&nbsp;</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">Wed</th>
                                <th className="py-4 px-8 font-normal bg-red-500 text-white italic">CSE2003 &nbsp; <span className="text-sm">A110</span></th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-yellow-400 text-white italic">CAO4001 &nbsp; AB303</th>
                                <th className="py-4 px-8 font-normal bg-blue-400 text-white italic">ENG1001 &nbsp; AB330</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-green-400 text-white italic">HUM2001 &nbsp; AB502</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">&nbsp;</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">Thu</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-violet-400 text-white italic">MAT3001 &nbsp; AB412</th>
                                <th className="py-4 px-8 font-normal bg-blue-400 text-white italic">ENG1001 &nbsp; AB330</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal bg-green-400 text-white italic">HUM2001 &nbsp; AB502</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">&nbsp;</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">Fri</th>
                                <th className="py-4 px-8 font-normal bg-red-500 text-white italic">CSE2003 &nbsp; A110</th>
                                <th className="py-4 px-8 font-normal">----</th>
                                <th className="py-4 px-8 font-normal bg-yellow-400 text-white italic">CAO4001 &nbsp; AB303</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">---</th>
                                <th className="py-4 px-8 font-normal">&nbsp;</th>
                            </tr>
                        </thead>
                    </table> 
                    </div>
                </div>
            </div>  
        </div>
    )
}