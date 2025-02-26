import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { eachtableProps } from './Table';
import { requestData } from '@/src/api/data/request';
import { reviewData } from '@/src/api/data/review';
import { lesseeData } from '@/src/api/data/lessee';

export interface requestTableProps {
	rowsPerPage: number;
	currentPage: number;
	setCurrentRequest: Dispatch<SetStateAction<number | null>>;
	tableData: requestData[]
	setTableData: Dispatch<SetStateAction<reviewData[]|requestData[]|lesseeData[]|null>>
}

const RequestTable: React.FC<requestTableProps> = ({rowsPerPage,currentPage,setCurrentRequest,tableData,setTableData}) => {
	const [sortColumn, setSortColumn] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

	const handleSort = (column: 'name' |'requestedAt') => {
		const newOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
		setSortColumn(column);
		setSortOrder(newOrder);
		const sortedData = (!tableData)?null:[...tableData].sort((a, b) => {
			if (column === 'name') {
				return newOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
			
			} else if (column === 'requestedAt') {
				return newOrder === 'asc'
					? new Date(a.requestedAt).getTime() - new Date(b.requestedAt).getTime()
					: new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime();
			}
			return 0;
		});
		setTableData(sortedData);
	};

	useEffect(() => {
		handleSort('name');
	}, []);

	const paginatedData = tableData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

	return (
		<div className='w-full h-full rounded-lg bg-slate-50'>
			<div className="flex w-full bg-white rounded-t-lg text-slate-400 border-b border-gray-200">
				<div className="px-6 py-3 text-left w-[62.5%]" onClick={() => handleSort('name')}>
					Name {sortColumn === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
				</div>
				<div className="px-6 py-3 text-left w-[25%]" onClick={() => handleSort('requestedAt')}>
					Requested At {sortColumn === 'requestedAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
				</div>
				<div className="px-6 py-3 text-left w-[12.5%]">Detail</div>
			</div>

			{/* Table Body */}
			<div className="w-full h-[calc(100%-96px)] overflow-y-auto text-slate-600">
				<div className="w-full">
					{paginatedData.map((row, index) => (
						<div key={index} className="flex w-full bg-white h-[56px] items-center border border-gray-200">
							<div className="px-6 w-[62.5%]">{row.name}</div>
							<div className="px-6 w-[25%]">{row.requestedAt}</div>
							<div className="px-6 w-w-[12.5%]">
								<button
									className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
									onClick={() => setCurrentRequest(0)}
								>
									View Detail
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/*Gray Space*/}
			<div className="h-12 w-full border-t border-gray-200"></div>
		</div>
	
	);
};

export default RequestTable;
