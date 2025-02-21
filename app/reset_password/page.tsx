export default function Page() {
    return (
        <div className="flex min-h-screen justify-center items-center rounded-md bg-[#E2E8F0]">
            <div className="flex w-[600px] p-12 px-16 flex-col justify-center items-center gap-10 flex-shrink-0 rounded-xl bg-white">
                <div className="flex flex-col justify-center items-center gap-2 self-stretch p-4 px-0">
                    <p className="text-[30px] font-semibold leading-[36px] text-[#334155]">
                        Reset Your Password
                    </p>
                    <p className="text-base font-normal leading-6 text-[#334155]">
                        Set a new password to access your account.
                    </p>
                </div>
                
                <div className="flex flex-col items-center gap-4 self-stretch">
                    <div className="flex flex-col items-start gap-1 self-stretch">
                        <div className="flex items-start gap-[10px] self-stretch">
                            <p className="text-xs font-medium leading-4 text-[#334155]">
                                New password
                            </p>
                        </div>
                        <div className="flex items-center gap-[10px] self-stretch p-2 rounded-md border border-[#E2E8F0]">
                            <input placeholder="Enter your new password" className="text-base font-normal leading-6 text-[#334155] outline-none w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-start gap-[10px] self-stretch">
                        <p className="text-xs font-medium leading-4 text-[#334155]">
                            Confirm new password
                        </p>
                        </div>
                        <div className="flex items-center gap-[10px] self-stretch p-2 rounded-md border border-[#E2E8F0]">
                            <input placeholder="Confirm your new password" className="text-base font-normal leading-6 text-[#334155] outline-none w-full"/>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-2 self-stretch">
                    <button className="flex h-[52px] p-4 justify-center items-center gap-[10px] self-stretch rounded-lg bg-[#1E3A8A]">
                        <p className="text-base font-normal leading-6 text-white">
                            Reset Password
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

