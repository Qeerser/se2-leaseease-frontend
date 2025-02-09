import React, { useState } from "react";
import Slider_Request from "./Slider_Request"
interface TableProps {
  data: {
    name: string;
    rating: number;
    reviews: number;
    requestedAt: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [isSlicebarVisible, setIsSlicebarVisible] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-[72.72vw] h-[45vh] rounded-lg border border-slate-200 bg-slate-50">
      {/* Table Header */}
      <div className="flex w-full bg-slate-400">
        <div className="px-6 py-3 text-left w-[40%]">Name</div>
        <div className="px-6 py-3 text-left w-[20%]">Rating</div>
        <div className="px-6 py-3 text-left w-[25%]">Requested At</div>
        <div className="px-6 py-3 text-left w-[15%]">Detail</div>
      </div>

      {/* Table Body */}
      <div className="w-full h-full overflow-y-auto">
        <div className="w-full">
          {data.map((row, index) => (
            <div key={index} className="flex w-full h-[56px] items-center border-b border-gray-200">
              <div className="px-6 w-[40%]">{row.name}</div>
              <div className="px-6 w-[20%]">{row.rating} ⭐ ({row.reviews})</div>
              <div className="px-6 w-[25%]">{row.requestedAt}</div>
              <div className="px-6 w-[15%]">
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={() => setIsSlicebarVisible(!isSlicebarVisible)}>
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isSlicebarVisible && <Slider_Request setIsSlicebarVisible={setIsSlicebarVisible} />}
    </div>
  );
};


export default Table;
