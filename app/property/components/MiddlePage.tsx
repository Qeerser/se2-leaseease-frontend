"use client";
import React from "react";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import PropertyDescription from "./PropertyDescription";

const MiddlePage: React.FC = () => {
  const tableData = [
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
    </div>
  );
};

export default MiddlePage;
