// sort button logic
// sort button active or hover css
// propertier active or hover css
// create new property button logic

"use client"
import { useState } from "react"
import SortOption from "./SortOption"
import PropertySingle from "./PropertySingle"

type Property = {
    id: number
    name: string
    rating: number
    location: string
    image: string
}

export default function PropertySidebar() {
    const [isSortOptionVisible, setIsSortOptionVisible] = useState<boolean>(false)

    const toggleSortOption = (): void => {
        setIsSortOptionVisible(!isSortOptionVisible)
    }


    const properties: Property[] = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: [
            "Luxury Condo",
            "Cozy Apartment",
            "Modern House",
            "Beachfront Villa",
            "Penthouse Suite",
            "Urban Studio",
            "Rustic Cabin",
            "High-Rise Loft",
            "Lakeview Cottage",
            "Garden Bungalow",
        ][i % 10],

        rating: parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
        location: [
            "Sathorn, Bangkok",
            "Jatujak, Bangkok",
            "Ekkamai, Bangkok",
            "Phuket, Thailand",
            "Silom, Bangkok",
            "Chiang Mai, Thailand",
            "Hua Hin, Thailand",
            "Pattaya, Thailand",
            "Samui, Thailand",
            "Krabi, Thailand",
        ][i % 10],

        image: `https://loremflickr.com/40/40?random=${i + 1}`
    }))

    return (
        <div className="flex w-[25rem] h-[calc(100vh-4rem)] p-[1rem] 1rem flex-col items-center gap-[0.5rem] self-stretch border-slate-300 bg-slate-50">
            <div className="flex justify-center items-center gap-[0.5rem] self-stretch">
                <input className="flex h-[40px] min-h-[40px] max-h-[40px] py-2 px-3 justify-between items-center flex-1 rounded-md bg-gray-200 outline-none" placeholder="Select Property" />
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] cursor-pointer" viewBox="0 0 16 16" fill="none" onClick={toggleSortOption}>
                        <path d="M14 10.6667L11.3333 13.3334M11.3333 13.3334L8.66667 10.6667M11.3333 13.3334V2.66675M2 5.33341L4.66667 2.66675M4.66667 2.66675L7.33333 5.33341M4.66667 2.66675V13.3334" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {isSortOptionVisible && <SortOption />}
                </div>
            </div>

            <div className="flex py-0 flex-col items-center gap-1 self-stretch overflow-y-auto">
                {properties.map((property: Property) => (
                    <PropertySingle key={property.id} property={property} />
                ))}
                <button className="flex h-[40px] py-2 px-[10px] justify-center items-center gap-2 self-stretch rounded-[6px] border border-[#1E3A8A] mt-2 sticky bottom-0 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33301 8H12.6663M7.99967 3.33333V12.6667" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[#1E3A8A] text-xs font-semibold leading-[16px]">
                        Create new property
                    </p>
                </button>
            </div>
        </div>
    )
}