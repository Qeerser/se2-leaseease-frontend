"use client";

import React from "react";
import { Pencil, Trash2 } from "lucide-react";

interface PropertyDescriptionProps {
  imageUrl: string;
  title: string;
  updatedAt: string;
  rating: number;
  reviews: number;
  location: string;
  size: string;
  price: string;
  onEdit: () => void;
  onDelete: () => void;
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
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-start gap-5 w-[67.78vw] h-[27.92vh]">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-[29.17vw] h-full rounded-md object-cover"
      />

      {/* Text Content */}
      <div className="w-[38.61vw] h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex space-x-3">
            <button
              onClick={onEdit}
              className="flex items-center px-4 py-1 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-100"
            >
              <Pencil size={16} className="mr-1" />
              Edit Property
            </button>
            <button
              onClick={onDelete}
              className="flex items-center px-7.5 py-5.97 border border-red-500 text-red-500 rounded-lg hover:bg-red-100"
            >
              <Trash2 size={16} className="mr-1" />
              Delete Property
            </button>
          </div>
        </div>

        {/* Metadata */}
        <p className="text-gray-500 text-sm mt-2">Updated at {updatedAt}</p>
        <div className="flex items-center text-yellow-500 mt-2">
          <span className="font-bold text-lg">{rating}</span>
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
    </div>
  );
};

export default PropertyDescription;
