import React from "react";

const TableHeader: React.FC = () => {
  return (
    <div className="flex w-[983px] px-2 items-start">
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b border-gray-200 text-left">Name</th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left w-[200px]">Rating</th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left w-[256px]">Requested At</th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left w-[112px]">Detail</th>
                </tr>
            </thead>
        </table>
    </div>
  );
};



export default TableHeader;
