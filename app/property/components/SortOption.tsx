export default function SortOption() {
    // move position like relative?
    return (
        <div className="absolute right-3 top-[20px] w-32 flex flex-col items-start rounded-md border border-slate-200 bg-white shadow-md">
            <div className="flex flex-col items-start self-stretch p-1">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        A-Z
                    </div>
                </div>
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Z-A
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="w-full h-[0.0625rem] bg-slate-200"></div>
            </div>
            <div className="flex flex-col items-start self-stretch p-1">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Most Popular
                    </div>
                </div>
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Least Popular
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="w-full h-[0.0625rem] bg-slate-200"></div>
            </div>
            <div className="flex flex-col items-start self-stretch p-1">
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Newest
                    </div>
                </div>
                <div className="flex h-8 items-center self-stretch rounded-sm px-2 text-xs cursor-pointer">
                    <div className="flex items-center gap-[0.625rem] flex-1">
                        Oldest
                    </div>
                </div>
            </div>
        </div>
    );
}
