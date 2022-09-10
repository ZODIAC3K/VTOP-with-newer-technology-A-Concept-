import Image from "next/image";

export default function Main_card(props) {
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
                            <label className="text-lg my-4 italic">Name</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">About: &nbsp; <span>XXXXX</span></label>
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
                            <label className="text-lg my-4 italic">Name</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">About: &nbsp; <span>XXXXX</span></label>
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
                            <label className="text-lg my-4 italic">Name</label>
                        </div>
                        <label className="text-md">Email: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">Contact: &nbsp; <span>XXXXX</span></label>
                        <label className="text-md mt-1">About: &nbsp; <span>XXXXX</span></label>
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