"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import EditProperty from "./EditProperty";
import DeleteProperty from "./DeleteProperty";

interface PropertyDescriptionProps {
  imageUrl: string;
  title: string;
  updatedAt: string;
  rating: number;
  reviews: number;
  location: string;
  size: string;
  price: string;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  imageUrl,
  title,
  updatedAt,
  rating,
  reviews,
  location,
  size,
  price,
}) => {
  const [isEditPropertyVisible, setIsEditPropertyVisible] = useState<boolean>(false)
  const [isDeletePropertyVisible, setIsDeletePropertyVisible] = useState<boolean>(false)

  return (
    <div className="flex items-start gap-5 w-[67.78vw] h-[27.92vh] rounded-md">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-[29.17vw] h-full rounded-md object-cover"
      />

      {/* Text Content */}
      <div className="w-[38.61vw] h-full flex flex-col justify-between relative ">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="absolute top-0 right-0 flex flex-col gap-2">
            <button
              onClick={() => setIsEditPropertyVisible(true)}
              className="flex items-center px-4 py-1 bg-yellow-50 border border-yellow-700 text-yellow-700 rounded-lg hover:bg-yellow-200"
            >
              <Pencil size={16} className="mr-1" />
              Edit Property
            </button>

            <button
              onClick={() => setIsDeletePropertyVisible(true)}
              className="flex items-center px-4 py-1 bg-red-50 border border-red-700 text-red-700 rounded-lg hover:bg-red-200"
            >
              <Trash2 size={16} className="mr-1" />
              Delete Property
            </button>
          </div>
        </div>

        {/* Metadata */}
        <p className="text-gray-500 text-sm mt-2">Updated at {updatedAt}</p>
        <div className="flex items-center text-yellow-500 mt-2">
          <span className="font-bold text-lg">{rating} ⭐</span>
          <span className="ml-1 text-gray-500">({reviews})</span>
        </div>

        {/* Property Details */}
        <div className="mt-4 space-y-1">
          <p className="text-gray-700">
            <strong>Location:</strong>
          </p>
          <p className="text-gray-700">
            {location}
          </p>
          <p className="text-gray-700">
            <strong>Size:</strong>
          </p>
          <p className="text-gray-700">
            {size}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong>
          </p>
          <p className="text-gray-700">
            {price}
          </p>
        </div>
      </div>
      {isEditPropertyVisible && <EditProperty setIsEditPropertyVisible = {setIsEditPropertyVisible}/>}
      {isDeletePropertyVisible && <DeleteProperty setIsDeletePropertyVisible = {setIsDeletePropertyVisible}/>}
    </div>
  );
};

export default PropertyDescription;
