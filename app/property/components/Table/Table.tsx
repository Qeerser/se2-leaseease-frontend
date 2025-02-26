import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import Slider_Request from '../Slider_Request';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewTable from './ReviewTable';
import RequestTable from './RequestTable';
import LesseeTable from './LesseeTable';
import { reviewData } from '@/src/api/data/review';
import { requestData } from '@/src/api/data/request';
import { lesseeData } from '@/src/api/data/lessee';
interface TableProps {
	tableType: string
	data: reviewData[]|requestData[]|lesseeData[]|null
}

export interface eachtableProps {
	rowsPerPage: number;
	currentPage: number;
	setCurrentRequest: Dispatch<SetStateAction<number | null>>;
	tableData: reviewData[]|requestData[]|lesseeData[]|null;
	setTableData: Dispatch<SetStateAction<reviewData[]|requestData[]|lesseeData[]|null>>
}

const Table: React.FC<TableProps> = ({tableType, data}) => {
    const [currentRequest, setCurrentRequest] = useState<number | null>(null);
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [tableData, setTableData] = useState(data)

    const [totalPages, setTotalPages] = useState((tableData)?tableData.length:1 / rowsPerPage);



	const table = 
		(tableType=='Request')?<RequestTable rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentRequest={setCurrentRequest} tableData={tableData} setTableData={setTableData}/>:
		(tableType=='Lessee')?<LesseeTable rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentRequest={setCurrentRequest} tableData={tableData} setTableData={setTableData}/>:
		<ReviewTable rowsPerPage={rowsPerPage} currentPage={currentPage} setCurrentRequest={setCurrentRequest} tableData={tableData} setTableData={setTableData}/>
	
    return (
        <div className="flex flex-col w-[72.72vw] h-[45vh] rounded-lg border border-slate-200 bg-white">
            {table}

            {/* Footer */}
            <div className="flex justify-end items-start gap-3 align-self-stretch text-black">
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

            {currentRequest != null && (
                <Slider_Request
                    id={'0'}
                    totalRequests={(tableData)?tableData.length:0}
                    currentRequest={currentRequest}
                    setCurrentRequest={setCurrentRequest}
                />
            )}
        </div>
    );
};

export default Table;
