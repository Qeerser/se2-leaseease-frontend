export default function PropertySidebar() {
    return (
        // add sth to btn
        // add detail
        <div className="flex w-[25rem] h-[calc(100vh-4rem)] p-[1rem] 1rem flex-col items-center gap-[0.5rem] self-stretch border-slate-300 bg-slate-50">
            <div className="flex justify-center items-center gap-[0.5rem] self-stretch">
                <div className="flex h-[40px] min-h-[40px] max-h-[40px] py-2 px-3 justify-between items-center flex-1 rounded-md bg-gray-200">
                    <div className="flex items-center gap-[10px] flex-1">
                        Select Property
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                    <path d="M14 10.6667L11.3333 13.3334M11.3333 13.3334L8.66667 10.6667M11.3333 13.3334V2.66675M2 5.33341L4.66667 2.66675M4.66667 2.66675L7.33333 5.33341M4.66667 2.66675V13.3334" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="flex max-h-[828px] py-0 flex-col items-center gap-1 self-stretch">

                <div className="flex py-2 px-[10px] items-center gap-2 self-stretch">
                    <div className="w-[40px] h-[40px] rounded-[6px] bg-[url('https://loremflickr.com/40/40?random=2')] bg-[length:199.261%_100%] bg-no-repeat bg-[position:-19.615px_0]">                    </div>

                    <div className="flex flex-col items-start flex-1">
                        <div className="flex items-center gap-1 self-stretch">
                            <p className="max-w-[264px] text-[#0F172A] text-sm font-medium leading-[20px]" style={{ fontFamily: 'Inter' }}>
                                Property Name
                            </p>
                            <div className="flex items-center gap-[1px] flex-1">
                                <p className="text-[#94A3B8] text-xs font-normal leading-[16px]" style={{ fontFamily: 'Inter' }}>
                                    4.5
                                </p>
                                <div className="flex w-[14px] h-[14px] justify-center items-center">
                                    <div className="w-[14px] h-[14px] flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7.00033 1.16663L8.80283 4.81829L12.8337 5.40746L9.91699 8.24829L10.6053 12.2616L7.00033 10.3658L3.39533 12.2616L4.08366 8.24829L1.16699 5.40746L5.19783 4.81829L7.00033 1.16663Z" fill="#FACC15" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                            <p className="text-[#94A3B8] text-sm font-normal leading-[20px]" style={{ fontFamily: 'Inter' }}>
                                Subdistrict, District
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex py-2 px-[10px] items-center gap-2 self-stretch">
                    <div className="w-[40px] h-[40px] rounded-[6px] bg-[url('https://loremflickr.com/40/40?random=2')] bg-[length:199.261%_100%] bg-no-repeat bg-[position:-19.615px_0]">                    </div>

                    <div className="flex flex-col items-start flex-1">
                        <div className="flex items-center gap-1 self-stretch">
                            <p className="max-w-[264px] text-[#0F172A] text-sm font-medium leading-[20px]" style={{ fontFamily: 'Inter' }}>
                                Property Longggggggggggggggg Name
                            </p>
                            <div className="flex items-center gap-[1px] flex-1">
                                <p className="text-[#94A3B8] text-xs font-normal leading-[16px]" style={{ fontFamily: 'Inter' }}>
                                    4.5
                                </p>
                                <div className="flex w-[14px] h-[14px] justify-center items-center">
                                    <div className="w-[14px] h-[14px] flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7.00033 1.16663L8.80283 4.81829L12.8337 5.40746L9.91699 8.24829L10.6053 12.2616L7.00033 10.3658L3.39533 12.2616L4.08366 8.24829L1.16699 5.40746L5.19783 4.81829L7.00033 1.16663Z" fill="#FACC15" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                            <p className="text-[#94A3B8] text-sm font-normal leading-[20px]" style={{ fontFamily: 'Inter' }}>
                                Jatuchack, Bangkok
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex h-[40px] py-2 px-[10px] justify-center items-center gap-2 self-stretch rounded-[6px] border border-[#1E3A8A]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33301 8H12.6663M7.99967 3.33333V12.6667" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[#1E3A8A] text-xs font-semibold leading-[16px]" style={{ fontFamily: 'Inter' }}>
                        Create new property
                    </p>

                </div>
            </div>


        </div>

    )
}