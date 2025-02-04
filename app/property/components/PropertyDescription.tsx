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
    <div className="flex items-start gap-5 self-stretch h-[420hx] w-[976px] flex-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-1/3 object-cover"
      />
      <div className="w-2/3 p-4">
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="flex items-center px-3 py-1 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-100"
            >
              <Pencil size={16} className="mr-1" />
              Edit Property
            </button>
            <button
              onClick={onDelete}
              className="flex items-center px-3 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-100"
            >
              <Trash2 size={16} className="mr-1" />
              Delete Property
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1">Updated at {updatedAt}</p>
        <div className="flex items-center text-yellow-500 mt-2">
          <span className="font-bold text-lg">{rating}</span>
          <span className="ml-1 text-gray-500">({reviews})</span>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Size:</strong> {size}
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Price:</strong> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
