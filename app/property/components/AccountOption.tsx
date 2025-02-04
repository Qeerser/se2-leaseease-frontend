export default function AccountDetail() {
    return (
        <div className="absolute right-8 top-14 z-10 flex w-40 flex-col items-start rounded-md border border-slate-200 bg-white shadow-md">
            <div className="flex flex-col items-start self-stretch p-1 cursor-pointer">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2">
                    <div className="flex items-center gap-[0.625rem] flex-1 font-bold">
                        My Account
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="w-full h-[0.0625rem] bg-slate-200"></div>
            </div>
            <div className="flex flex-col items-start self-stretch p-1 cursor-pointer">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Profile
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="w-full h-[0.0625rem] bg-slate-200"></div>
            </div>
            <div className="flex flex-col items-start self-stretch p-1 cursor-pointer">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Lessee Mode
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="w-full h-[0.0625rem] bg-slate-200"></div>
            </div>
            <div className="flex flex-col items-start self-stretch p-1 cursor-pointer">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}
