import React from 'react'
import leadingImg from '../assets/onions_imgs/leading_img.png'
import slide3 from '../assets/onions_imgs/slide_3.jpg'
import aboutImg from '../assets/onions_imgs/about_img.png'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar';

export default function Home(){

  const navigate = useNavigate(); 

  return (
    <div className="bg-gray-100">
      <div className="bg-white border-b hidden lg:flex px-3 py-1">
        <div className="container mx-auto px-4 flex items-center justify-between py-1 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={leadingImg} alt="Logo" className="h-16" />
            <h1 className="text-xl font-bold text-gray-800">
              <span className="text-[#00A300]">Agri</span> Trade Global
            </h1>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line text-[#00A300] text-xl"></i>
              <span>Call Us: <br /><strong> <a href="tel:+917709442362" className="text-gray-800"> +91 7709442362</a></strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line text-[#00A300] text-xl"></i>
              <span>Email Us: <br /><strong> <a href="mailto:panditsiddhant2000@gmail.com" className="text-gray-800">panditsiddhant2000@gmail.com</a></strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-[#00A300] text-xl"></i>
              <span>Opening Hours: <br /><strong className="text-gray-800">Mon - Sat: 9am - 7pm</strong></span>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      <div className="relative w-full min-h-[90vh] md:h-screen">
        <img src={slide3} className="absolute inset-0 w-full h-full object-cover" alt="Agro Background" />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col justify-start md:justify-center items-center h-full px-6 pt-24 md:pt-0">
          <div className="max-w-4xl text-center">
            <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Premium Agro Exports
              <span className="block text-green-400 mt-2">
                From Farm to Global Markets
              </span>
            </h1>

            <p className="mt-4 md:mt-8 text-gray-200 text-lg sm:text-base md:text-xl leading-relaxed text-justify">
              We ensure premium agricultural exports through direct farm sourcing, strict quality control, and reliable packaging. Our products are carefully handled to meet international standards and deliver freshness to global markets.
            </p>

            {/* ✅ BUTTON FIXED */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button
                onClick={() => (window.location.hash = "#/about")}
                className="bg-[#00A300] hover:bg-green-700 transition px-6 md:px-8 py-2.5 md:py-3 text-lg md:text-base font-semibold rounded-lg text-white shadow-lg"
              >
                WHY US?
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* rest of your code unchanged */}
    </div>
  )
}