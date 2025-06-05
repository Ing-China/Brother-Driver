"use client";
import Hero from "@/components/Hero";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const trips = [
    {
      id: 1,
      title: "Thornridge Cir. Shiloh",
      location: "St George's Ln Singapore",
      price: 300,
      image: "/images/temple.jpg",
      tags: ["Mountains", "City"],
      tagColors: ["bg-green-100 text-green-700", "bg-blue-100 text-blue-700"],
    },
    {
      id: 2,
      title: "Roraima Tepui",
      location: "Canaima Park, Venezuela",
      price: 790,
      image: "/images/temple.jpg",
      tags: ["Solo travel", "Budget"],
      tagColors: ["bg-blue-100 text-blue-700", "bg-gray-100 text-gray-700"],
    },
    {
      id: 3,
      title: "Socotra Island",
      location: "Yemen",
      price: 870,
      image: "/images/temple.jpg",
      tags: ["Luxury", "Beach"],
      tagColors: ["bg-purple-100 text-purple-700", "bg-cyan-100 text-cyan-700"],
    },
    {
      id: 4,
      title: "San Lake Baikal",
      location: "Siberia, Russia",
      price: 604,
      image: "/images/temple.jpg",
      tags: ["Sports", "Adventurous"],
      tagColors: ["bg-orange-100 text-orange-700", "bg-red-100 text-red-700"],
    },
    {
      id: 5,
      title: "Anse Source d'Argent",
      location: "La Digue, Seychelles",
      price: 870,
      image: "/images/temple.jpg",
      tags: ["Beach", "Luxury"],
      tagColors: ["bg-cyan-100 text-cyan-700", "bg-purple-100 text-purple-700"],
    },
    {
      id: 6,
      title: "Aysén Region",
      location: "Patagonia, Chile",
      price: 604,
      image: "/images/temple.jpg",
      tags: ["Sports", "Adventurous"],
      tagColors: ["bg-orange-100 text-orange-700", "bg-red-100 text-red-700"],
    },
    {
      id: 7,
      title: "Taman Negara",
      location: "Peninsular Malaysia",
      price: 300,
      image: "/images/temple.jpg",
      tags: ["Mountains", "Budget"],
      tagColors: ["bg-green-100 text-green-700", "bg-gray-100 text-gray-700"],
    },
    {
      id: 8,
      title: "Zhangye Landform",
      location: "Gansu, China",
      price: 790,
      image: "/images/temple.jpg",
      tags: ["Solo travel", "City"],
      tagColors: ["bg-blue-100 text-blue-700", "bg-blue-100 text-blue-700"],
    },
  ];
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <Hero />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Handpicked Trips
            </h1>
            <p className="text-gray-600">
              Browse well-planned trips designed for different travel styles and
              interests
            </p>
          </div>

          {/* Trip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image with price tag */}
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

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {trip.title}
                  </h3>

                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm line-clamp-1">
                      {trip.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {trip.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${trip.tagColors[index]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 text-gray-600 bg-white rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-1 overflow-x-auto max-w-full sm:justify-center px-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 text-gray-600 bg-white rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-semibold text-gray-900">Tourvisto</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-gray-500 space-y-2 sm:space-y-0">
                <a href="#" className="hover:text-gray-700">
                  Terms & Condition
                </a>
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
