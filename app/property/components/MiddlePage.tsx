"use client";
import React from "react";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import PropertyDescription from "./PropertyDescription";
// import { Property } from '@/type/Property'
import { useAppSelector } from "@/store/hooks";

type PropertyDescriptionProps = {
    selectedPropertyID: number | null;
    setSelectedPropertyID: React.Dispatch<React.SetStateAction<number|null>>;
}

export default function MiddlePage({ selectedPropertyID, setSelectedPropertyID }: PropertyDescriptionProps) {
    if (!selectedPropertyID) {
        return <p className="flex items-center justify-center text-center m-auto">Select a property to view details</p>;
    }
    const { properties ,loading } = useAppSelector((state) => state.property);
    const selectedProperty = properties.find((e) => e.id == selectedPropertyID)
    
    if (!selectedProperty) {
        return <p className="flex items-center justify-center text-center m-auto">Property not found.</p>;
    }

    const handleButtonClick = (activeButton: string) => {
        console.log("Active button:", activeButton);
    };

    return (
        <div>
            <PropertyDescription
                selectedProperty={selectedProperty!}
                setSelectedPropertyID={setSelectedPropertyID}
            />

            <div className="flex flex-col items-start gap-5 flex-1 self-stretch my-[20px]">
                <ButtonGroup buttons={["Request", "Lessee", "Review"]} onClick={handleButtonClick} />
            </div>

            <Table />
        </div>
    );
};

