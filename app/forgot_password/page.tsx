'use client'

import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <div className="flex min-h-screen justify-center items-center rounded-md bg-[#E2E8F0]">
            <div className="flex w-[600px] p-12 px-16 flex-col justify-center items-center gap-10 flex-shrink-0 rounded-xl bg-white">
                <div className="flex flex-col justify-center items-center gap-2 self-stretch p-4 px-0">
                    <p className="text-[30px] font-semibold leading-[36px] text-[#334155] font-inter">
                        Forgot Password
                    </p>
                    <p className="text-base font-normal leading-6 text-[#334155] font-inter">
                        Reset your password via email.
                    </p>
                </div>
                
                <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-start gap-[10px] self-stretch">
                        <p className="text-xs font-medium leading-4 text-[#334155] font-inter">
                            Email
                        </p>
                    </div>
                    <div className="flex items-center gap-[10px] self-stretch p-2 rounded-md border border-[#E2E8F0]">
                        <input placeholder="Enter your email" className="text-base font-normal leading-6 text-[#334155] font-inter outline-none w-full"/>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 self-stretch">
                    <button className="flex h-[52px] p-4 justify-center items-center gap-[10px] self-stretch rounded-lg bg-[#1E3A8A]">
                        <p className="text-base font-normal leading-6 text-white font-inter">
                            Sent Email Verification
                        </p>
                    </button>
                    <button className="flex px-[19px] justify-center items-center gap-[10px] bg-transparent border-none mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none" className="w-5 h-5">
                            <path d="M10.5003 15.8333L4.66699 9.99996M4.66699 9.99996L10.5003 4.16663M4.66699 9.99996H16.3337" stroke="#253B80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text-base font-normal leading-6 text-[#334155] font-inter" onClick={() => router.push("/login")}>
                            Back to Login
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

