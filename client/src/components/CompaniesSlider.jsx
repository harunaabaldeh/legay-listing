// src/components/CompaniesSlider.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const companiesData = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://via.placeholder.com/150",
    description: "A leading tech company specializing in software solutions.",
  },
  {
    id: 2,
    name: "HealthPlus",
    logo: "https://via.placeholder.com/150",
    description: "Innovative healthcare services and products provider.",
  },
  {
    id: 3,
    name: "EcoGoods",
    logo: "https://via.placeholder.com/150",
    description: "Sustainable and eco-friendly consumer goods.",
  },
  {
    id: 4,
    name: "EduSmart",
    logo: "https://via.placeholder.com/150",
    description: "Online education platform for all age groups.",
  },
  {
    id: 5,
    name: "FinanceGuru",
    logo: "https://via.placeholder.com/150",
    description: "Financial advisory and investment management.",
  },
  // Add more companies as needed
];

const CompaniesSlider = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Top Companies</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {companiesData.map((company) => (
            <SwiperSlide key={company.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompaniesSlider;
