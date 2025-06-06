import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="mb-8 relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-img.jpg')` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <Header />

      <div className="relative z-10 flex items-center min-h-screen pt-15 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Plan Your
                  <br />
                  <span className="text-white">Trip with Brother Driver</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Customize your travel itinerary in minutes—pick your
                  destination, set your preferences, and explore with
                  confidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-12 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
