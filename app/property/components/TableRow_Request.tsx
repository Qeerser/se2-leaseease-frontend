import React from "react";

interface TableRowProps {
  name: string;
  rating: number;
  reviews: number;
  requestedAt: string;
}

const TableRow_Request: React.FC<TableRowProps> = ({ name, rating, reviews, requestedAt }) => {
  return (
    <tr className="flex w-full h-[56px] px-2 items-center border-b border-gray-200">
      <th className="px-6 w-[40%]">{name}</th>
      <th className="px-6 w-[20%]">{rating} ⭐ ({reviews})</th>
      <th className="px-6 w-[25%]">{requestedAt}</th>
      <th className="px-6 w-[15%]">
        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          View Detail
        </button>
      </th>
    </tr>
  );
};

export default TableRow_Request;
