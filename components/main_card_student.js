import Image from "next/image";
import cookieCutter from 'cookie-cutter'
import {useState,useEffect} from 'react'
import { useRouter } from "next/router";

export default function Main_card(props) {
    const [dataResponse,setdataResponse] = useState([])
    const router = useRouter()
    // just pass the required attribute as a string here
    function putData(field) {
        try {
            const text = props.data[0][field] || dataResponse[0][field]
            return (
                text
            )
        } catch (err) {
            return(
                <p>Loading...</p>
            )    
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
              const query = `SELECT u.uid, u.name, u.email, u.teleNo FROM vtop.users AS u WHERE u.uid = "${user[0].uid}";`
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
        <div className="w-full flex flex-col xl:flex-row justify-center items-center">
            <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Program Chair</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                        <div className="mt-2 flex flex-col justify-center items-center">
                            <div className="border-2 border-blue-500 rounded-full flex justify-center p-1">
                                <Image className="rounded-full" src={props.image} width={80} height={80} ></Image>
                            </div>
                            <label className="text-lg my-4 italic">Preetam Suman</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>preetam.suman@vitbhopal.ac.in</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>1234567890</span></label>
                    
                    </div>
                </div>
            </div>
            <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Proctor</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                        <div className="mt-2 flex flex-col justify-center items-center">
                            <div className="border-2 border-blue-500 rounded-full flex justify-center p-1">
                                <Image className="rounded-full" src={props.image} width={80} height={80} ></Image>
                            </div>
                            <label className="text-lg my-4 italic">Ganeshan R</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>ganeshan.ganesh@vitbhopal.ac.in</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>1234567890</span></label>
                    
                    </div>
                </div>
            </div>
            <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">DEAN</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                        <div className="mt-2 flex flex-col justify-center items-center">
                            <div className="border-2 border-blue-500 rounded-full flex justify-center p-1">
                                <Image className="rounded-full" src={props.image} width={80} height={80} ></Image>
                            </div>
                            <label className="text-lg my-4 italic">Poonkuntran</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>poonkuntran@vitbhopal.ac.in</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>1234567890</span></label>
                        
                    </div>
                </div>
            </div>
            <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">NOTICE</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                        <div className="mt-2 flex flex-col justify-center items-center">
                            <label className="text-lg my-2 italic">no notification...</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}