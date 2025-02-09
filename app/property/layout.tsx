import type { Metadata } from "next"
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import Slider from "./components/Slider";
import MiddlePage from "./components/MiddlePage";
// import Slider_Request from "./components/Slider_Request";

export const metadata: Metadata = {
    title: "Lessor center",
    description: "Lessor center for manage room property",
}

export default function PropertyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="flex w-full h-full flex-col items-center rounded-[0.375rem] bg-slate-200">
            <Header />
            <div className="flex justify-center items-center flex-1 self-stretch">
                <Sidebar />
                {/* KNOTT */}
                <div className="flex p-[2rem] flex-col items-start gap-[0.625rem] flex-1 self-stretch">
                    <MiddlePage />

                </div>
                {/* KNOTT */}
            </div>
            {/* <Slider /> */}
            {/* <Slider_Request /> */}
        </div>
    )

}