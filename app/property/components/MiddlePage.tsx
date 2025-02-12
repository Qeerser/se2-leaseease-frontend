"use client";
import React, { useState } from "react";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import PropertyDescription from "./PropertyDescription";
import { Property } from '../../../type/Property'

export default function MiddlePage({ selectedProperty }: { selectedProperty: Property | null }) {
    if (!selectedProperty) {
        return <p className="text-center">Select a property to view details</p>;
    }

    const handleButtonClick = (activeButton: string) => {
        console.log("Active button:", activeButton);
    };


    return (
        <div>
            <PropertyDescription
                imageUrl={selectedProperty.image}
                title={selectedProperty.name}
                updatedAt={selectedProperty.date}
                rating={selectedProperty.rating}
                location={selectedProperty.location}
                size={selectedProperty.size}
                price={selectedProperty.price}
                reviews={selectedProperty.reviews}
            />

            <div className="flex flex-col items-start gap-5 flex-1 self-stretch my-[20px]">
                <ButtonGroup buttons={["Request", "Lessee", "Review"]} onClick={handleButtonClick} />
            </div>

            <Table />
        </div>
    );
};

