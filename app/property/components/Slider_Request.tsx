"use client";

import { Dispatch, SetStateAction, useState } from "react"
import AcceptRequest from "./AcceptRequest";
import RejectRequest from "./RejectRequest";

type Slider_RequestProps = {
    setIsSlicebarVisible: Dispatch<SetStateAction<boolean>>
}

export default function Slider_Request({ setIsSlicebarVisible }: Slider_RequestProps) {
    const [status, setStatus] = useState<"Accept" | "Reject" | "None">("None");

    return(
            <div className="flex z-50 w-[32.5rem] h-[calc(100vh-4rem)] p-0 flex-col items-start absolute right-0 bottom-0 border-l border-slate-300 bg-white shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.10),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.10)]  overflow-y-auto">
                <div className="flex h-[2.5rem] p-[0.625rem] [0.75rem] items-center gap-[1.5rem] self-stretch">
                    {/* 1 */}
                    <div className="flex items-center gap-[8px]">
                        <div className="flex items-center gap-1">
                            <button onClick={() => setIsSlicebarVisible(false)}>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 11.3334L7.33333 8.00008L4 4.66675M8.66667 11.3334L12 8.00008L8.66667 4.66675" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.33301 7.33325V3.33325M3.33301 3.33325H7.33301M3.33301 3.33325L12.6663 12.6666M12.6663 8.66659V12.6666M12.6663 12.6666H8.66634" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </div>
                        <div className="w-[0.5px] h-[10px] bg-slate-400"></div>
                        <div className="text-slate-600 text-xs font-normal" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                            Create New Property
                        </div>
                    </div>

                    <div className="flex center gap-2 absolute right-2">
                        <p className="text-slate-600 text-sm font-normal">{1} of {7} Request</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[16px] h-[16px] border bg-slate-100 border-s-slate-300 g-8 rounded-sm">
                            <path d="M12 10L8 6L4 10" stroke="#CBD5E1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[16px] h-[16px] border bg-slate-100 border-s-slate-300 g-8 rounded-sm">
                            <path d="M4 6L8 10L12 6" stroke="#CBD5E1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div className="flex h-[52.5rem] p-[1.25rem] [1.5rem] flex-col items-start gap-[0.625rem] self-stretch">
                    {/* 2 */}

                        {/* User Profile Section */}
                        <div className="flex items-center gap-4 border-b pb-4">
                            <img
                            src="/avatar.png"
                            alt="User Avatar"
                            className="w-[80px] h-[80px] rounded-full border"
                            />
                            <div>
                            <h2 className="text-slate-600 text-sm font-normal">John Doe</h2>
                            <p className="text-slate-600 text-sm font-normal">Requested at 29 Oct 2024 22:45</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.384 2.833 8.718-7.416-5.384-7.416 5.384 2.833-8.718-7.417-5.384h9.167z"/></svg> 4.5 (99)
                            </div>
                            </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex flex-col justify-end gap-2 mt-4 absolute top-10 right-4">
                        <button className="h-[28px] px-4 py-1 border border-gray-300 rounded-lg text-slate-600 text-sm font-normal bg-white hover:bg-gray-100 shadow-md">
                            View Profile
                        </button>
                        <button className="h-[28px] px-4 py-1 border border-blue-500 rounded-lg text-slate-600 text-sm font-normal bg-blue-100 hover:bg-blue-200 shadow-md">
                            Send Message
                        </button>
                    </div>
                        
                        {/* Details Section */}
                        <div className="mt-6">
                            <h3 className=" text-slate-400 text-sm font-normal">Property</h3>
                            <p className=" text-slate-600 text-sm font-normal">Lorem ipsum dolor sit amet</p>
                            <h3 className=" text-slate-400 text-sm font-normal mt-3">Purpose</h3>
                            <p className=" text-slate-600 text-sm font-normal leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper quam ac risus ornare...
                            </p>
                        </div>
      
                        

                </div>

                <div className="flex p-[16px] justify-center items-center gap-3 self-stretch border-t border-slate-300">
                    {/* 3 */}
                    <div className="flex justify-end items-center self-stretch">
                        <button className="flex h-10 min-h-10 max-h-10 px-4 py-2 flex-col justify-center items-center gap-[0.625rem] rounded-md bg-red-50 border border-red-700 text-red-700" onClick={() => setStatus("Accept")}>
                            Accept
                        </button>
                        <div className="flex flex-col items-start gap-[0.625rem] pl-2">
                            <button className="flex h-10 min-h-10 max-h-10 px-4 py-2 flex-col justify-center items-center gap-[0.625rem] rounded-md  bg-green-50 border border-green-700 text-green-700" onClick={() => setStatus("Reject")}>
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
                {status === "Accept" && <AcceptRequest setIsAcceptRequestVisible={setStatus} />}
                {status === "Reject" && <RejectRequest setIsRejectRequestVisible={setStatus} />}
            </div>

    )
}