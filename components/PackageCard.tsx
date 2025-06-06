import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface PackageCardProps {
  trip: {
    id: string | number;
    title: string;
    location: string;
    image: string;
    price: number;
    tags: string[];
    tagColors: string[];
  };
}

const PackageCard: React.FC<PackageCardProps> = ({ trip }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white px-2 sm:px-3 py-1 rounded-full shadow-md">
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            ${trip.price}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {trip.title}
        </h3>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm line-clamp-1">{trip.location}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {trip.tags.map((tag, index) => (
            <span
              key={tag + index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${trip.tagColors[index]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
