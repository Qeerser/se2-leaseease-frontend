"use client";
import React, { useState } from "react";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import PropertyDescription from "./PropertyDescription";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function MiddlePage({ selectedProperty }: { selectedProperty: Property | null }) {
    if (!selectedProperty) {
        return <p className="text-center">Select a property to view details</p>;
    }


    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const tableData = [
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
        { name: "John Doe", rating: 4.5, reviews: 99, requestedAt: "29 Oct 2024 22:45" },
    ];

    const handleButtonClick = (activeButton: string) => {
        console.log("Active button:", activeButton);
    };

    const handleEdit = () => {
        console.log("Edit clicked");
    };

    const handleDelete = () => {
        
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
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <div className="flex flex-col items-start gap-5 flex-1 self-stretch my-[20px]">
                <ButtonGroup buttons={["Request", "Lessee", "Review"]} onClick={handleButtonClick} />
            </div>

            <Table data={tableData} />

            {/* Footer */}
            <div className="h-[0.4wh] flex justify-end items-start gap-3 align-self-stretch text-black absolute bottom-4 right-4">
                <span>Rows per page:</span>
                <select
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>

                <span>
                    {currentPage} of {totalPages}
                </span>

                <button
                    className="border border-gray-300 rounded-md px-2 py-1 disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft size={16} />
                </button>

                <button
                    className="border border-gray-300 rounded-md px-2 py-1 disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

