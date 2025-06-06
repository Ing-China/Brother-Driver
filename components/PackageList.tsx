import React from "react";
import PackageCard from "./PackageCard";

const PackageList = ({ trips }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Handpicked Trips
        </h1>
        <p className="text-gray-600">
          Browse well-planned trips designed for different travel styles and
          interests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {trips.map((trip) => (
          <PackageCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
