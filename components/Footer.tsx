import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-6 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 px-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Brother Driver</span>
        </div>

        <nav className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-gray-500 space-y-2 sm:space-y-0">
          <a href="#" className="hover:text-gray-700 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
