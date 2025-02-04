import React from "react";
import TableRow_Request from "./TableRow_Request";
import TableHeader from "./TableHeader";

interface TableProps {
  data: {
    name: string;
    rating: number;
    reviews: number;
    requestedAt: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      <TableHeader />
      <table className="flex flex-col items-start flex-1 self-stretch rounded-lg border border-slate-200 bg-slate-50">
        <tbody>
          {data.map((row, index) => (
            <TableRow_Request key={index} {...row} />
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Table;
