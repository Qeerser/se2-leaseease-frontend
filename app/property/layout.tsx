import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Slider from "./components/slider"

export default function PropertyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex w-full h-full flex-col items-center rounded-[0.375rem] bg-slate-200">
                    <Header />
                    <div className="flex justify-center items-center flex-1 self-stretch">
                        <Sidebar />
                        {/* KNOTT */}
                        <div className="flex p-[2rem] flex-col items-start gap-[0.625rem] flex-1 self-stretch">
                            {/* Content goes here */}
                        </div>
                        {/* KNOTT */}
                    </div>
                    <Slider />
                </div>

                {/* <main>{children}</main> */}
            </body>
        </html>
    )
}