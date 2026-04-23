import React from 'react'
import leadingImg from '../assets/onions_imgs/leading_img.png'
import slide3 from '../assets/onions_imgs/slide_3.jpg'
import aboutImg from '../assets/onions_imgs/about_img.png'

export default function Home(){
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

      <nav id="navbar" className="bg-[#00A300] text-white px-3 py-1">
        <div className="container mx-auto px-4 flex justify-between items-center py-4 md:py-2">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800 md:hidden">AGRI TRADE GLOBAL</h1>
          </div>

          <div className="flex items-center space-x-8 desktop-menu hidden md:flex w-full justify-start">
            <a href="#/home" className="hover:text-black">Home</a>
            <a href="#/about" className="hover:text-black">About Us</a>
            <a href="#/gallery" className="hover:text-black">Gallery</a>
            <a href="#/contact" className="hover:text-black">Contact Us</a>
          </div>

          <div className="flex items-center space-x-3 social-icons hidden md:flex">
            <div className="relative">
              <button id="dropdownToggle" className="px-3 py-1 rounded text-sm font-medium border border-white/70 hover:bg-white hover:text-black text-white" type="button">Select Language</button>
            </div>
            <a href="https://www.instagram.com/shivsarexport1064/" className="hover:text-gray-300 text-lg" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
          </div>

          <div className="mobile-menu relative md:hidden">
            <i className="ri-menu-line text-2xl cursor-pointer" id="menuIcon"></i>
          </div>
        </div>
      </nav>

      <div className="relative w-full min-h-[90vh] md:h-screen">
        <img src={slide3} className="absolute inset-0 w-full h-full object-cover" alt="Agro Background" />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 flex flex-col justify-start md:justify-center items-center h-full px-6 pt-24 md:pt-0">
          <div className="max-w-4xl text-center">
            <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Premium Agro Exports
              <span className="block text-green-400 mt-2">From Farm to Global Markets</span>
            </h1>
            <p className="mt-4 md:mt-8 text-gray-200 text-lg sm:text-base md:text-xl leading-relaxed text-justify">We ensure premium agricultural exports through direct farm sourcing, strict quality control, and reliable packaging. Our products are carefully handled to meet international standards and deliver freshness to global markets.</p>
            <div className="mt-6 md:mt-8 flex justify-center">
              <button id="whyUsButton" className="bg-[#00A300] hover:bg-green-700 transition px-6 md:px-8 py-2.5 md:py-3 text-lg md:text-base font-semibold rounded-lg text-white shadow-lg">WHY US?</button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src={aboutImg} className="max-w-full rounded-sm h-auto" alt="About" />
          </div>
        </div>

        <div className="sm:w-1/2 p-8">
          <div className="text">
            <span className="text-[#00A300] border-b-2 uppercase text-lg">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">About <span className="text-[#00A300]">Our Company</span></h2>
            <p className="text-gray-700 text-justify leading-relaxed max-w-[35rem] mt-3 font-semibold">Agri Trade Global – From Our Farms in Nashik to the World</p>
            <p className="text-gray-700 text-justify leading-relaxed max-w-[35rem] mt-3">At Agri Trade Global, we don’t just trade onions; we grow them. Based in Nashik, Maharashtra—the onion capital of India—we are a dedicated team of farmers and exporters committed to bringing the finest produce to the global market.</p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-2 mb-12">
            <h2 className="text-4xl font-extrabold text-black" id="why-us-section">Why Us?</h2>
            <p className="mt-4 font-normal text-2xl text-black">We are committed to understanding and fulfilling our customers' needs, <br />Some of the key factors that set us apart include:</p>
          </div>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col">
              <i className="ri-map-pin-line text-[#00A300] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 tracking-wide">DIRECT FROM NASHIK</h3>
              <p className="mt-3 text-gray-600 text-justify leading-relaxed max-w-xs mx-auto">We are located in the heart of India’s premium onion-growing belt, ensuring access to the best varieties known for quality and storage strength.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col">
              <i className="ri-hand-coin-line text-[#00A300] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 tracking-wide">FARMER’S PRICE</h3>
              <p className="mt-3 text-gray-600 text-justify leading-relaxed max-w-xs mx-auto">Because we grow our own produce and source directly from our farmer network, we eliminate middleman commissions and pass the cost advantage directly to our buyers.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col">
              <i className="ri-search-eye-line text-[#00A300] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 tracking-wide">COMPLETE TRACEABILITY</h3>
              <p className="mt-3 text-gray-600 text-justify leading-relaxed max-w-xs mx-auto">We monitor fertilizer and pesticide usage across farms, ensuring our onions comply with Global GAP standards and international food safety requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
