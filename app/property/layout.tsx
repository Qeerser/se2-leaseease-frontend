import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MiddlePage from "./components/MiddlePage";
import CreateNewProperty from "./components/DeleteProperty";
import Test from "./components/RejectRequest"

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
            <Test />
        </div>
    )

}