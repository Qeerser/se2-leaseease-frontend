"use client";
import React, { useState } from "react";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import PropertyDescription from "./PropertyDescription";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiddlePage: React.FC = () => {
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
    console.log("Delete clicked");
  };

  return (
    <div>
        <PropertyDescription
            imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            title="Lorem ipsum dolor sit amet"
            updatedAt="29 Oct 2024 22:45"
            rating={4.5}
            reviews={99}
            location="254 Phaya Thai Rd, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330"
            size="5,000 Square meter"
            price="12,000 Bath per month"
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

export default MiddlePage;
