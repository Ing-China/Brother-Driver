"use client";

import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PackageList from "@/components/PackageList";

const Home = () => {
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

  return (
    <>
      <Hero />
      <PackageList trips={trips} />
      <PackageList trips={trips} />
      <Footer />
    </>
  );
};

export default Home;
