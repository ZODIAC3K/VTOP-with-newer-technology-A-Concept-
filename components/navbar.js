import { BiUser } from "react-icons/bi";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { AiOutlineProfile,AiOutlineBook,AiFillEdit,AiOutlineFileText,AiOutlineInfoCircle,AiOutlineRocket } from "react-icons/ai";
import { useRouter } from "next/router";
import cookieCutter from 'cookie-cutter'


export default function Navbar({children}) {
    const router = useRouter()

    const logout = (event) =>{
        cookieCutter.set('user_id','',{ expires: new Date(0)})
        cookieCutter.set('user_details','',{ expires: new Date(0)})
        router.push('/')
    }

    return (
        <div className="w-72 bg-blue-500 rounded-r-md h-screen shadow-2xl">
            <div className="px-6 pt-8">
                <div className="flex item-center justify-between">
                    <div className="flex">
                        <div className="mt-1.5">
                            <a href="#">
                                <BiUser className="text-3xl text-white border-2 border-white rounded-full"/>
                            </a>
                        </div>
                        <div className="text-white text-sm mx-4">
                            <p className="font-semibold">Name:
                            <label className="mx-2 font-normal italic">User_Name</label>
                            </p>
                            <p className="font-semibold">ID:
                            <label className="mx-2 font-normal italic">User_ID</label>
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onClick={logout}>
                        <VscArrowSmallLeft className="text-2xl text-white bg-blue-400 rounded-md"/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="px-6 pt-4">
                <div className="relaive">
                    <div className="absolute mt-2 flex items-center px-2">
                        <BsSearch className="text-gray-500 mt-0.5"/>
                    </div>
                </div>
                <input type="text" className="w-full rounded px-8 text-sm font-semibold bg-white outline-none
                py-2 placeholder:text-sm placeholder:font-normal text-gray-500" placeholder ="search..."></input>
            </div>
            <div className="px-6 pt-4">
                <hr className="border-1 border-white-200"></hr>
            </div>
            <div className="pr-6 pt-4 ">
                <ul className="">
                    <a href="#" className="my-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className="flex flex-row items-center w-full">
                            <AiOutlineProfile className="pl-4 text-4xl"/>
                            <span className="ml-2">My Profile</span>
                        </li>
                    </a>
                    <a href="#" className="my-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className=" flex flex-row items-center w-full">
                            <AiOutlineBook className=" pl-4 text-4xl"/>
                            <span className="ml-2">Academics</span>
                        </li>
                    </a>
                    <a href="#" className="mmy-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className=" flex flex-row items-center w-full">
                            <AiFillEdit className=" pl-4 text-4xl"/>
                            <span className="ml-2">Examination</span>
                        </li>
                    </a>
                    <a href="#" className="my-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className=" flex flex-row items-center w-full">
                            <AiOutlineFileText className=" pl-4 text-4xl"/>
                            <span className="ml-2">Request</span>
                        </li>
                    </a>
                    <a href="#" className="my-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className=" flex flex-row items-center w-full">
                            <AiOutlineInfoCircle className=" pl-4 text-4xl"/>
                            <span className="ml-2">Others</span>
                        </li>
                    </a>
                    <a href="#" className="my-1 pr-4 pl-8 py-2  inline-block w-full rounded-r-md font-semibold hover:bg-white hover:text-blue-500 text-white">
                        <li className=" flex flex-row items-center w-full">
                            <AiOutlineRocket className=" pl-4 text-4xl"/>
                            <span className="ml-2">Support</span>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}