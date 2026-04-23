import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"; // Make sure to run: npm install @emailjs/browser
import leadingImg from '../assets/onions_imgs/leading_img.png';

export default function Contact() {
  const [toast, setToast] = useState(null); // 'success' | 'error' | null
  const formRef = useRef(null);

  function showToast(type) {
    setToast(type);
    setTimeout(() => setToast(null), 3000);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = formRef.current;
    const fd = new FormData(form);
    
    // Validation
    const first = fd.get('firstname')?.toString().trim() || '';
    const last = fd.get('lastname')?.toString().trim() || '';
    const email = fd.get('email')?.toString().trim() || '';
    const message = fd.get('message')?.toString().trim() || '';

    if (!first || !last || !email || !message) {
      showToast('error');
      return;
    }

    // EmailJS Integration
    // Replace these placeholders with your actual keys from EmailJS dashboard
    emailjs.sendForm(
      "YOUR_SERVICE_ID", 
      "YOUR_TEMPLATE_ID", 
      formRef.current, 
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      showToast('success');
      form.reset(); // Clears the form after success
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showToast('error');
    });
  }

  return (
    <div className="bg-gray-100">
      {/* Top Logo Bar */}
      <div className="bg-white border-b hidden lg:flex px-3 py-1">
        <div className="container mx-auto px-4 flex items-center justify-between py-1 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={leadingImg} alt="Logo" className="h-16" />
            <h1 className="text-xl font-bold text-gray-800">
              <span className="text-[#00A300]">Agri</span> Trade Global
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav id="navbar" className="bg-[#00A300] text-white px-3 py-1">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800 md:hidden">AGRI TRADE GLOBAL</h1>
          </div>
          <div className="flex items-center space-x-8 desktop-menu hidden md:flex w-full justify-start">
            <a href="#/home" className="hover:text-black">Home</a>
            <a href="#/about" className="hover:text-black">About Us</a>
            <a href="#/gallery" className="hover:text-black">Gallery</a>
            <a href="#/contact" className="hover:text-black">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          {/* Sidebar Info */}
          <div className="bg-[#00A300] md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-white">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-white text-justify w-full">
              At <strong>AGRI GLOBAL TRADE</strong>, we deliver premium agricultural products worldwide. Contact us for bulk orders and business inquiries.
            </p>
            <p className="mt-4 leading-7 text-white">
              <strong>Email Us:</strong><br />
              <a href="mailto:panditsiddhant2000@gmail.com" className="text-black hover:underline">panditsiddhant2000@gmail.com</a><br />
              <strong>Call Us:</strong><br />
              <a href="tel:+917709442362" className="text-black hover:underline">+91 7709442362</a>
            </p>
          </div>

          {/* Toast Notifications */}
          <div className={`${toast === 'success' ? 'fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50' : 'hidden'}`}>
            "Thanks! We will contact you soon."
          </div>
          <div className={`${toast === 'error' ? 'fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50' : 'hidden'}`}>
            Fill all fields or check connection!
          </div>

          {/* Contact Form */}
          <form className="md:col-span-8 p-10 bg-white" ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="firstname" type="text" placeholder="John" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastname" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email Address</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" name="email" placeholder="********@*****.**" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Your Message</label>
                <textarea rows={10} name="message" className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <button className="shadow bg-[#00A300] hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded transition-colors" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}