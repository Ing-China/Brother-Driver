import React from "react";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-20 flex items-center justify-between p-6 lg:px-12">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center ">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">Brother Driver</h1>
      </div>
    </header>
  );
};

export default Header;
