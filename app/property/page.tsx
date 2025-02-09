"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import MiddlePage from "./components/MiddlePage"
// import Slider_Request from "./components/Slider_Request"

type Property = {
    id: number
    name: string
    rating: number
    location: string
    size: string
    price: string
    date: string
    image: string
    reviews: number
}

export default function PropertyPage({ children, }: { children: React.ReactNode }) {

    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

    return (

        <div className="flex w-full h-full flex-col items-center rounded-[0.375rem] bg-slate-200">
            <Header />
            <div className="flex justify-center items-center flex-1 self-stretch">
                <Sidebar setSelectedProperty={setSelectedProperty} />
                {/* KNOTT */}
                <div className="flex p-[2rem] flex-col items-start gap-[0.625rem] flex-1 self-stretch">
                    <MiddlePage selectedProperty={selectedProperty} />

                </div>
                {/* KNOTT */}
            </div>
            {/* <Slider_Request /> */}
        </div>
    )

}