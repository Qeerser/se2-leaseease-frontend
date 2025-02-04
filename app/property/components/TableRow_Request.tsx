import React from "react";

interface TableRowProps {
  name: string;
  rating: number;
  reviews: number;
  requestedAt: string;
}

const TableRow_Request: React.FC<TableRowProps> = ({ name, rating, reviews, requestedAt }) => {
  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200 w-[392px]">{name}</td>
      <td className="px-6 py-4 border-b border-gray-200 w-[200px]">
        {rating} ⭐ ({reviews})
      </td>
      <td className="px-6 py-4 border-b border-gray-200 w-[256px]">{requestedAt}</td>
      <td className="px-6 py-4 border-b border-gray-200">
        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          View Detail
        </button>
      </td>
    </tr>
  );
};

export default TableRow_Request;
