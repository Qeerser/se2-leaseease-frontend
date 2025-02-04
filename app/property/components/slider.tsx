export default function PropertySlider() {
    return (
        <div className="flex w-[32.5rem] h-[calc(100vh-4rem)] p-0 flex-col items-start absolute right-0 bottom-0 border-l border-slate-300 bg-white shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.10),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.10)]  overflow-y-auto">
            <div className="flex h-[2.5rem] p-[0.625rem] [0.75rem] items-center gap-[1.5rem] self-stretch">
                {/* 1 */}
                <div className="flex items-center gap-[8px]">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                            <path d="M4 11.3334L7.33333 8.00008L4 4.66675M8.66667 11.3334L12 8.00008L8.66667 4.66675" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33301 7.33325V3.33325M3.33301 3.33325H7.33301M3.33301 3.33325L12.6663 12.6666M12.6663 8.66659V12.6666M12.6663 12.6666H8.66634" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                    <div className="w-[0.5px] h-[10px] bg-slate-400"></div>
                    <div className="text-slate-600 text-xs font-normal" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                        Create New Property
                    </div>
                </div>
            </div>

            <div className="flex h-[52.5rem] p-[1.25rem] [1.5rem] flex-col items-start gap-[0.625rem] self-stretch">
                {/* 2 */}
                <div className="flex flex-col items-start gap-[16px] self-stretch">
                    {/* <div className="flex h-[280px] p-[28px] flex-col items-start gap-[10px] self-stretch rounded-[6px] bg-slate-200"> */}
                        <div className="flex-1 self-stretch bg-[url('https://loremflickr.com/400/200?random=2')] bg-lightgray bg-[50%] bg-cover bg-no-repeat"></div>
                    {/* </div> */}
                    <div className="flex flex-col items-start gap-[4px] self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <div className="text-slate-700 text-xs font-medium" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                                Image*
                            </div>
                        </div>
                        <div className="flex h-[40px] min-h-[40px] max-h-[40px] py-[8px] px-[12px] items-center self-stretch rounded-[6px] border border-slate-200 bg-white">
                            <div className="flex pr-[4px] flex-col items-center gap-[10px]">
                                <div className="flex py-[1px] px-[6px] items-center gap-[10px]">
                                    Choose file
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="text-slate-700 text-sm font-normal" style={{ fontFamily: 'Inter', lineHeight: 'normal' }}>
                                    No file chosenat 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[4px] self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <div className="text-slate-700 text-xs font-medium" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                                Name*
                            </div>

                        </div>
                        <div className="flex p-[8px] items-center gap-[10px] self-stretch rounded-[6px] border border-slate-200">
                            <div className="text-slate-300 text-base font-normal" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                                Property Name
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[144px] flex-col items-start gap-[4px] self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <div className="text-slate-700 text-xs font-medium" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                                Location*
                            </div>
                        </div>
                        <div className="flex p-[8px] items-start gap-[10px] flex-1 self-stretch rounded-[6px] border border-slate-200">
                            <div className="text-slate-300 text-base font-normal" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                                Property Location
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[4px] self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <div className="text-slate-700 text-xs font-medium" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                                Size* (Square meter)
                            </div>

                        </div>
                        <div className="flex items-center gap-[4px] self-stretch">
                            <div className="flex p-[8px] items-center gap-[10px] flex-1 rounded-[6px] border border-slate-200">
                                <div className="text-slate-300 text-base font-normal" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                                    eg. 100.00
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[4px] self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <div className="text-slate-700 text-xs font-medium" style={{ fontFamily: 'Inter', lineHeight: '16px' }}>
                                Price* (Baht per month)
                            </div>
                        </div>
                        <div className="flex p-[8px] items-center gap-[10px] self-stretch rounded-[6px] border border-slate-200">
                            <div className="text-slate-300 text-base font-normal" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                                eg. 1,000.00
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex p-[16px] justify-center items-center gap-3 self-stretch border-t border-slate-300">
                {/* 3 */}
                <div className="flex p-[12px] justify-center items-center gap-2 flex-1 rounded-[6px] border border-blue-900">
                    <div className="text-blue-900 text-base font-medium" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                        Cancel
                    </div>
                </div>
                <div className="flex p-[12px] justify-center items-center gap-2 flex-1 rounded-[6px] bg-blue-900">
                    <div className="text-white text-base font-medium" style={{ fontFamily: 'Inter', lineHeight: '24px' }}>
                        Create Property
                    </div>
                </div>

            </div>
        </div>

    )
}