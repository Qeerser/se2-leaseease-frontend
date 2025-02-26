'use client';
import React, { use, useEffect, useState } from 'react';
import Table from './Table/Table';
import ButtonGroup from './ButtonGroup';
import PropertyDescription from './PropertyDescription';
import { useAppSelector } from '@/store/hooks';
import { getReviewData, reviewData } from '@/src/api/data/review';
import { getRequestData, requestData } from '@/src/api/data/request';
import { getLesseeData, lesseeData } from '@/src/api/data/lessee';

export default function MiddlePage() {
    const { selectedProperty } = useAppSelector((state) => state.property);
	const [tableType, setTable] = useState('Request')
	const [allData, setAllData] = useState<{ review: reviewData[], request: requestData[], lessee: lesseeData[]}>({ review: [], request: [], lessee: [] });
    const [data, setData] = useState<reviewData[]|requestData[]|lesseeData[]>([]);

    // Fetch all data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const reviewDatas = await getReviewData();
                const requestDatas = await getRequestData();
                const lesseeDatas = await getLesseeData();

                setAllData({ review: reviewDatas, request: requestDatas, lessee: lesseeDatas });
				setData(allData.request)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    if (!selectedProperty) {
        return <p className="flex items-center justify-center text-center m-auto">Select a property to view details</p>;
    }

    if (!selectedProperty) {
        return <p className="flex items-center justify-center text-center m-auto">Property not found.</p>;
    }

    const handleButtonClick = (activeButton: string) => {
		setTable(activeButton)
		switch (activeButton) {
			case 'Request':
				setData(allData.request);
			case 'Review':
				setData(allData.lessee);
			case 'Lessee':
				setData(allData.review);
		}
			
        console.log('Active button:', activeButton);
    };

    return (
        <div>
            <PropertyDescription />

            <div className="flex flex-col items-start gap-5 flex-1 self-stretch my-[20px]">
                <ButtonGroup buttons={['Request', 'Lessee', 'Review']} onClick={handleButtonClick} />
            </div>

            <Table tableType={tableType} data={data}/>
        </div>
    );
}
