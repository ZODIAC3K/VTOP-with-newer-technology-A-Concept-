
export default function Profile_St(props) {
    return (
        <div className="w-full flex flex-col xl:flex-row justify-center items-center ">
            <div className="flex flex-col">
                <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col justify-center items-center">
                            <span className="italic text-2xl">Email Credentials</span>
                            <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                        </div>
                    </div>
                    <div className="font-normal mt-1 flex flex-col p-2">
                            <div className="mt-2 flex flex-col">
                                <label className="text-md">VTop:&nbsp; <span>21BAI10333</span></label>
                                <label className="text-md">Password:&nbsp; <span>{"Sk<9^C3L"}</span></label>
                                <label className="text-md">Gmail:&nbsp; <span>divya.chakrabarti@gmail.com</span></label>
                                <label className="text-md">Password:&nbsp; <span>{"Sk<9^C3L"}</span></label>
                            </div>
                        </div>
                </div>
                <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col justify-center items-center">
                            <span className="italic text-2xl">Bank Information</span>
                            <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                        </div>
                        <div className="font-normal mt-1 flex flex-col p-2">
                            <div className=" flex flex-col justify-center items-center">
                                <label className="text-lg mb-2 italic">Bank:&nbsp; <span>Indian Bank</span></label>
                            </div>
                            <label className="text-md ">Account No: &nbsp; <span>123045</span></label>
                            <label className="text-md ">Card No: &nbsp; <span>123995</span></label>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-md border-2 border-white text-white font-bold bg-blue-500 py-2 px-4  rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 ">Reveal Information</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-80 p-4 h-max shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                        <div className="flex flex-col mt-4">
                            <div className="flex flex-col justify-center items-center">
                                <span className="italic text-2xl">Wifi Information</span>
                                <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                            </div>
                            <div className="font-normal mt-1 flex flex-col p-2">
                                <label className="text-md ">User Name: &nbsp; <span>21BAI10333</span></label>
                                <label className="text-md ">Password: &nbsp; <span>awrnip129</span></label>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="text-md border-2 border-white text-white font-bold bg-blue-500 py-2 px-4  rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 ">Reveal Information</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="shadow-md m-10 rounded-sm hover:shadow-xl ease-out-in">
                    <div className="flex flex-col justify-center items-center">
                        <span className="italic text-2xl">Book List</span>
                        <div className="w-6 h-1 mt-1 bg-blue-500"></div>
                    </div>
                    <table className="">
                        <thead className= "border-b-2 border-blue-500">
                            <tr className="font-normal">
                                <th className="py-3">Book ID</th>
                                <th className="py-3">Name</th>
                                <th className="py-3">Issue date</th>
                                <th className="py-3">Status</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">22-2-22</th>
                                <th className="py-4 px-8 font-normal">Fluid Mechanics</th>
                                <th className="py-4 px-8 font-normal">22-2-22</th>
                                <th className="py-4 px-8 text-green-500">Returned</th>
                            </tr>
                            <tr className="cursor-pointer duration-300">
                                <th className="py-4 px-8 font-normal">33-2-33</th>
                                <th className="py-4 px-8 font-normal">Solid State of Matter</th>
                                <th className="py-4 px-8 font-normal">22-2-22</th>
                                <th className="py-4 px-8 text-yellow-500">In Use</th>
                            </tr>
                        </thead>
                    </table>
                </div> 
            </div>
    </div>
    )
}