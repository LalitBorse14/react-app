import React from 'react'
import leadingImg from '../assets/onions_imgs/leading_img.png'
import aboutImg from '../assets/onions_imgs/about_img.png'
import Navbar from './Navbar';

export default function About(){
  return (
    <div className="bg-gray-100">
      <div className="bg-white border-b hidden lg:flex px-3 py-1">
        <div className="container mx-auto px-4 flex items-center justify-between py-1 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={leadingImg} alt="Logo" className="h-16" />
            <h1 className="text-xl font-bold text-gray-800"><span className="text-[#00A300]">Agri</span> Trade Global</h1>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2"><i className="ri-phone-line text-[#00A300] text-xl"></i><span>Call Us: <br /><strong> <a href="tel:+917709442362" className="text-gray-800"> +91 7709442362</a></strong></span></div>
            <div className="flex items-center space-x-2"><i className="ri-mail-line text-[#00A300] text-xl"></i><span>Email Us: <br /><strong> <a href="mailto:panditsiddhant2000@gmail.com" className="text-gray-800">panditsiddhant2000@gmail.com</a></strong></span></div>
            <div className="flex items-center space-x-2"><i className="ri-time-line text-[#00A300] text-xl"></i><span>Opening Hours: <br /><strong className="text-gray-800">Mon - Sat: 9am - 7pm</strong></span></div>
          </div>
        </div>
      </div>

      <Navbar></Navbar>

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
            <p className="text-gray-700 text-justify leading-relaxed max-w-[35rem] mt-3 font-bold">Agri Trade Global – From Our Farms in Nashik to the World</p>
            <p className="text-gray-700 text-justify leading-relaxed max-w-[35rem] mt-3">At Agri Trade Global, we don’t just trade onions; we grow them. Based in Nashik, Maharashtra—the onion capital of India—we are a dedicated team of farmers and exporters committed to bringing the finest produce to the global market.</p>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#00A300] text-emerald-50 mt-12">
        <div className="max-w-7xl mx-auto p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-8">
            <div className="lg:col-span-5"><h2 className="text-2xl font-bold tracking-wide">AgriGlobal</h2>
              <p className="mt-4 text-[15px] leading-8 text-justify text-emerald-100/90">Building sustainable agricultural trade networks with trusted sourcing and global distribution.</p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-5 space-y-3 text-[15px] text-emerald-100/90"><li><a href="#/home" className="inline-block hover:text-white transition">Home</a></li><li><a href="#/about" className="inline-block hover:text-white transition">About Us</a></li></ul>
              </div>
            </div>
            <div className="lg:col-span-3"><h3 className="text-lg font-semibold">Why AgriGlobal?</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-emerald-100/90"><li className="flex items-start gap-2"><span className="mt-1 shrink-0 text-emerald-200">✦</span><span>Farm-to-market direct sourcing — no middlemen</span></li></ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
