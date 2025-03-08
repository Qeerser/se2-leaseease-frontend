'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../property/components/Header';
import { useAuth } from '@/hooks/useAuth';
// import { CRangeSlider } from '@coreui/react-pro';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import LoadPage from '@/components/ui/loadpage';

export default function PropertyPage() {
    const { loading } = useAuth();
    const [Search_property, setSearch_property] = useState<string>('');
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(100000);
    const [rating, setRating] = useState<number>(0);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current); // Clear previous timeout if values change
        }

        debounceTimeout.current = setTimeout(() => {
            console.log(Search_property, minValue, maxValue, rating);
        }, 2000); // Wait for 4 seconds before logging

        return () => clearTimeout(debounceTimeout.current as NodeJS.Timeout);
    }, [Search_property, minValue, maxValue, rating]);

    const properties = [
        {
            id: 1,
            name: 'Property 1',
            image: 'https://loremflickr.com/382/160?random=1',
            rating: '4.5 / 5',
            reviews: 99,
            location: '254 Phaya Thai Rd, Khwaeng Wang Mai, Pathum Wan, Bangkok 10330',
            size: '4000 m²',
            price: '10,000 / month',
        },
        {
            id: 2,
            name: 'Property 2',
            image: 'https://loremflickr.com/382/160?random=2',
            rating: '4.2 / 5',
            reviews: 85,
            location: '123 Sukhumvit Rd, Klong Toei, Bangkok 10110',
            size: '3500 m²',
            price: '9,000 / month',
        },
        {
            id: 3,
            name: 'Property 3',
            image: 'https://loremflickr.com/382/160?random=3',
            rating: '4.7 / 5',
            reviews: 120,
            location: '75 Rama IV Rd, Pathum Wan, Bangkok 10330',
            size: '4200 m²',
            price: '11,500 / month',
        },
        {
            id: 4,
            name: 'Property 4',
            image: 'https://loremflickr.com/382/160?random=4',
            rating: '4.0 / 5',
            reviews: 60,
            location: '99 Silom Rd, Bang Rak, Bangkok 10500',
            size: '3000 m²',
            price: '8,500 / month',
        },
        {
            id: 5,
            name: 'Property 5',
            image: 'https://loremflickr.com/382/160?random=5',
            rating: '4.8 / 5',
            reviews: 140,
            location: '88 Sathorn Rd, Yannawa, Bangkok 10120',
            size: '4500 m²',
            price: '12,000 / month',
        },
    ];

    const handleSliderChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setMinValue(values[0]);
            setMaxValue(values[1]);
        }
    };
    return loading ? (
        <LoadPage />
    ) : (
        <div className="flex w-full min-h-screen flex-col items-center rounded-[0.375rem] bg-white">
            <Header />
            <div className="flex justify-center items-center gap-2.5 py-2 flex-1 self-stretch h-full">
                <div className="flex flex-col items-center w-[23.61vw] h-100 gap-10 px-2.5 self-stretch bg-transparent">
                    {/* left side */}
                    <div className="flex h-[40px] min-h-[40px] max-h-[40px] w-full py-2 px-3 justify-between items-center flex-1 rounded-md bg-gray-200">
                        <input
                            className="text-base flex center bg-transparent w-full h-full outline-none"
                            placeholder="Search property"
                            value={Search_property || ''}
                            onChange={(e) => setSearch_property(e.target.value)}
                        />
                    </div>
                    <div className="flex px-2 flex-col items-center gap-3 self-stretch">
                        <h1 className="flex px-3 flex-col justify-center items-start gap-2.5 self-stretch">
                            Price Range
                        </h1>
                        <Slider
                            range
                            min={0}
                            max={100000}
                            value={[minValue, maxValue]}
                            onChange={handleSliderChange}
                            step={1}
                        />
                        <div className="flex p-2.5 justify-between items-center self-stretch">
                            <div className="flex flex-col w-36 items-start">
                                <p> Lowest Price </p>
                                <div className="flex w-full h-7 p-2.5 px-5 justify-center items-center gap-2 rounded-lg bg-gray-200">
                                    {minValue}
                                </div>
                            </div>
                            <div className="flex w-2.25 p-[20px_1px_0_1px] flex-col justify-center items-center gap-5 self-stretch">
                                <p className="self-stretch"> - </p>
                            </div>
                            <div className="flex flex-col w-36 items-start">
                                <p> Highest Price </p>
                                <div className="flex w-full h-7 p-2.5 px-5 justify-center items-center gap-2 rounded-lg bg-gray-200">
                                    {maxValue}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 flex-col items-center gap-3 self-stretch">
                        <h1 className="flex px-3 flex-col justify-center items-start gap-2.5 self-stretch">
                            Property Area Range
                        </h1>
                        <Slider
                            range
                            min={0}
                            max={100000}
                            value={[minValue, maxValue]}
                            onChange={handleSliderChange}
                            step={1}
                        />
                        <div className="flex p-2.5 justify-between items-center self-stretch">
                            <div className="flex flex-col w-36 items-start">
                                <p> Minimum </p>
                                <div className="flex w-full h-7 p-2.5 px-5 justify-center items-center gap-2 rounded-lg bg-gray-200">
                                    {minValue}
                                </div>
                            </div>
                            <div className="flex w-2.25 p-[20px_1px_0_1px] flex-col justify-center items-center gap-5 self-stretch">
                                <p className="self-stretch"> - </p>
                            </div>
                            <div className="flex flex-col w-36 items-start">
                                <p> Maximum </p>
                                <div className="flex w-full h-7 p-2.5 px-5 justify-center items-center gap-2 rounded-lg bg-gray-200">
                                    {maxValue}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 flex-col items-start gap-2 self-stretch">
                        <p className="font-bold"> Rating </p>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-blue-500"
                                    onClick={() => setRating(item)}
                                />
                                <span className="text-sm text-yellow-400"> {'★'.repeat(item)} </span>
                            </label>
                        ))}
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" />
                            <span className="text-sm text-gray-700">No Rating</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[57.08vw] h-[84vh] gap-3 self-stretch bg-transparent overflow-y-auto scrollbar-hide">
                    {/* right side */}
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="flex p-5 items-center gap-2 rounded-xl border-2 border-slate-100 w-full"
                        >
                            <div className="w-[382px] h-[160px] rounded-md">
                                <img
                                    src={property.image}
                                    alt="Property Image"
                                    className="w-full h-full rounded-md object-cover"
                                />
                            </div>
                            <div className="flex w-[450px] p-2.5 flex-col justify-between items-start self-stretch">
                                <div className="flex items-start gap-2 self-stretch justify-between align-center items-center">
                                    <p className="text-4xl">{property.name}</p>
                                    <div className="flex items-center gap-1">
                                        <p>{property.rating}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 28 28"
                                            fill="none"
                                        >
                                            <path
                                                d="M13.9997 2.3335L17.6047 9.63683L25.6663 10.8152L19.833 16.4968L21.2097 24.5235L13.9997 20.7318L6.78967 24.5235L8.16634 16.4968L2.33301 10.8152L10.3947 9.63683L13.9997 2.3335Z"
                                                fill="#FACC15"
                                            />
                                        </svg>
                                        <p>({property.reviews})</p>
                                    </div>
                                </div>
                                <p>Location: {property.location}</p>
                                <div className="flex justify-between items-end self-stretch">
                                    <p>Size: {property.size}</p>
                                    <p className="text-2xl">{property.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
