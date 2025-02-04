export default function sidebar() {
    return (
        <div className="flex w-full h-16 px-5 justify-between items-center border-b border-slate-300 bg-slate-50">
            <div className="flex items-center gap-7">
                <p className="text-black font-lexend text-2xl font-normal leading-[36px]">
                    LEASEEASE
                </p>
                <p className="text-black font-lexend text-base font-normal leading-[36px]">
                    Lessor center
                </p>
            </div>

            <div className="flex p-2.5 justify-center items-center gap-3">
                <p className="text-slate-900 text-sm font-medium leading-5 p-4">
                    John Doe
                </p>
                <div className="w-[40px] h-[40px] rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://loremflickr.com/40/40?random=1')" }}></div>
                {/* add more detail */}
                {/* change sth to button */}
            </div>

        </div>

    )
}