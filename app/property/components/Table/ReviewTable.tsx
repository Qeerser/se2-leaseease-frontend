import React, { useState, useEffect } from 'react';
import { eachtableProps } from './Table';

const ReviewTable: React.FC<eachtableProps> = ({rowsPerPage, currentPage, setCurrentRequest}) => {
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const [tableData, setTableData] = useState([
        {
            name: 'John Doe',
            rating: 4.5,
            reviews: 99,
            reviewedAt: '2024-10-29T22:45:00',
        },
        {
            name: 'Alice Smith',
            rating: 3.8,
            reviews: 75,
            reviewedAt: '2024-10-28T21:30:00',
        },
        {
            name: 'Bob Johnson',
            rating: 5.0,
            reviews: 120,
            reviewedAt: '2024-10-30T10:15:00',
        },
        {
            name: 'Charlie Brown',
            rating: 4.2,
            reviews: 45,
            reviewedAt: '2024-10-27T18:00:00',
        },
        {
            name: 'David Lee',
            rating: 3.9,
            reviews: 80,
            reviewedAt: '2024-10-25T14:10:00',
        },
        {
            name: 'Emma Wilson',
            rating: 4.8,
            reviews: 150,
            reviewedAt: '2024-10-31T16:50:00',
        },
        {
            name: 'Frank Miller',
            rating: 3.5,
            reviews: 60,
            reviewedAt: '2024-10-23T12:30:00',
        },
        {
            name: 'Grace Adams',
            rating: 4.0,
            reviews: 90,
            reviewedAt: '2024-10-22T11:45:00',
        },
        {
            name: 'Hannah White',
            rating: 4.7,
            reviews: 110,
            reviewedAt: '2024-10-26T09:20:00',
        },
        {
            name: 'Ian Taylor',
            rating: 3.6,
            reviews: 50,
            reviewedAt: '2024-10-21T08:10:00',
        },
        {
            name: 'Jack Moore',
            rating: 4.1,
            reviews: 70,
            reviewedAt: '2024-10-20T07:40:00',
        },
        {
            name: 'Kelly Clark',
            rating: 4.3,
            reviews: 85,
            reviewedAt: '2024-10-24T06:55:00',
        },
        {
            name: 'Liam Martinez',
            rating: 4.9,
            reviews: 140,
            reviewedAt: '2024-10-18T05:35:00',
        },
        {
            name: 'Mia Rodriguez',
            rating: 3.7,
            reviews: 65,
            reviewedAt: '2024-10-17T04:20:00',
        },
        {
            name: 'Nathan Scott',
            rating: 4.6,
            reviews: 100,
            reviewedAt: '2024-10-16T03:15:00',
        },
        {
            name: 'Olivia Hall',
            rating: 4.4,
            reviews: 95,
            reviewedAt: '2024-10-15T02:05:00',
        },
        {
            name: 'Paul Allen',
            rating: 3.8,
            reviews: 55,
            reviewedAt: '2024-10-14T01:50:00',
        },
        {
            name: 'Quinn Young',
            rating: 4.0,
            reviews: 75,
            reviewedAt: '2024-10-13T00:30:00',
        },
        {
            name: 'Rachel King',
            rating: 4.2,
            reviews: 88,
            reviewedAt: '2024-10-12T23:10:00',
        },
        {
            name: 'Sam Walker',
            rating: 3.9,
            reviews: 72,
            reviewedAt: '2024-10-11T22:00:00',
        },
    ]);

    const [totalPages, setTotalPages] = useState(tableData.length / rowsPerPage);

    const handleSort = (column: 'name' | 'rating' | 'reviewedAt') => {
        const newOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortOrder(newOrder);

        const sortedData = [...tableData].sort((a, b) => {
            if (column === 'name') {
                return newOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (column === 'rating') {
                return newOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
            } else if (column === 'reviewedAt') {
                return newOrder === 'asc'
                    ? new Date(a.reviewedAt).getTime() - new Date(b.reviewedAt).getTime()
                    : new Date(b.reviewedAt).getTime() - new Date(a.reviewedAt).getTime();
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
				<div className="px-6 py-3 text-left w-[40%]" onClick={() => handleSort('name')}>
					Name {sortColumn === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
				</div>
				<div className="px-6 py-3 text-left w-[20%]" onClick={() => handleSort('rating')}>
					Rating {sortColumn === 'rating' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
				</div>
				<div className="px-6 py-3 text-left w-[25%]" onClick={() => handleSort('reviewedAt')}>
					Reviewed At {sortColumn === 'reviewedAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
				</div>
				<div className="px-6 py-3 text-left w-[15%]">Detail</div>
			</div>

			{/* Table Body */}
			<div className="w-full h-[calc(100%-96px)] overflow-y-auto text-slate-600">
				<div className="w-full">
					{paginatedData.map((row, index) => (
						<div key={index} className="flex w-full bg-white h-[56px] items-center border border-gray-200">
							<div className="px-6 w-[40%]">{row.name}</div>
							<div className="px-6 w-[20%]">
								{row.rating} ⭐ ({row.reviews})
							</div>
							<div className="px-6 w-[25%]">{row.reviewedAt}</div>
							<div className="px-6 w-[15%]">
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

export default ReviewTable;
