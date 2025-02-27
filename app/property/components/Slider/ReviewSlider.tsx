'use client';

import Rating from '@mui/material/Rating';
import { Dispatch, SetStateAction, useState } from 'react';

type ReviewSliderProps = {
    id: string;
    totalRequests: number;
    currentRequest: number;
    setCurrentRequest: Dispatch<SetStateAction<number | null>>;
};

export default function ReviewSlider({ id, totalRequests, currentRequest, setCurrentRequest }: ReviewSliderProps) {
    const [imgPath, setImgPath] = useState('/avatar.png');
    const [userName, setUserName] = useState('John Doe');
    const [requestTime, setRequestTime] = useState('29 Oct 2024 22:45');
    const [rating, setRating] = useState(4.7);
    const [detail, setDetail] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper quam ac risus ornare...'
    );
    const [lesseeStatus, setLesseeStatus] = useState('Active');
    return (
        <div className="flex z-50 w-[32.5rem] h-[calc(100vh-4rem)] p-0 flex-col items-start absolute right-0 bottom-0 border-l border-slate-300 bg-white shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.10),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.10)]  overflow-y-auto">
            <div className="flex h-[2.5rem] p-[0.625rem] [0.75rem] items-center gap-[1.5rem] self-stretch">
                {/* 1 */}
                <div className="flex items-center gap-[8px]">
                    <div className="flex items-center gap-1">
                        <button onClick={() => setCurrentRequest(null)}>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M4 11.3334L7.33333 8.00008L4 4.66675M8.66667 11.3334L12 8.00008L8.66667 4.66675"
                                    stroke="#64748B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M3.33301 7.33325V3.33325M3.33301 3.33325H7.33301M3.33301 3.33325L12.6663 12.6666M12.6663 8.66659V12.6666M12.6663 12.6666H8.66634"
                                    stroke="#64748B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[0.5px] h-[10px] bg-slate-400"></div>
                    <div
                        className="text-slate-600 text-xs font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '16px' }}
                    >
                        Review Detail
                    </div>
                </div>

                <div className="flex center gap-2 absolute right-2">
                    <p className="text-slate-600 text-sm font-normal">
                        {currentRequest} of {totalRequests} Lessee
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-[16px] h-[16px] border bg-slate-100 border-s-slate-300 g-8 rounded-sm"
                    >
                        <path d="M12 10L8 6L4 10" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-[16px] h-[16px] border bg-slate-100 border-s-slate-300 g-8 rounded-sm"
                    >
                        <path d="M4 6L8 10L12 6" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="flex h-[52.5rem] p-[1.25rem] [1.5rem] flex-col items-start gap-[0.625rem] self-stretch">
                {/* 2 */}

                {/* User Profile Section */}
                <div className="flex items-center gap-4">
                    <img src={imgPath} alt="User Avatar" className="w-[80px] h-[80px] rounded-full border" />
                    <div>
                        <h2 className="text-slate-400 text-sm font-normal">{userName}</h2>
                        <p className="text-slate-400 text-sm font-normal">Requested at {requestTime}</p>
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
                <div className="">
                    <h3 className=" text-slate-400 text-sm font-normal mt-3">Rating</h3>
                    <p className=" text-slate-600 text-sm font-normal flex items-center">
                        <p>{rating}</p>
                        <Rating name="read-only" value={rating} readOnly size="small" />
                    </p>
                    <h3 className=" text-slate-400 text-sm font-normal mt-3">Detail</h3>
                    <p className=" text-slate-600 text-sm font-normal leading-relaxed">{detail}</p>
                </div>
            </div>
        </div>
    );
}
