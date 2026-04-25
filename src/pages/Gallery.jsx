import React from 'react'
import leadingImg from '../assets/onions_imgs/leading_img.png'
import pic2 from '../assets/onions_imgs/pic_2.jpeg'
import img1 from '../assets/onions_imgs/img_1.avif'
import pic4 from '../assets/onions_imgs/pic_4.png'
import pic6 from '../assets/onions_imgs/pic_6.png'
import pic9 from '../assets/onions_imgs/pic_9.png'
import pic11 from '../assets/onions_imgs/pic_11.png'
import pic10 from '../assets/onions_imgs/pic_10.png'
import pic12 from '../assets/onions_imgs/pic_12.png'
import white2 from '../assets/onions_imgs/white_onion_2.jpeg'
import Navbar from './Navbar';

const imgs = [pic2, img1, pic4, pic4, pic6, pic9, pic11, pic10, pic9, pic11, pic12, white2]

export default function Gallery(){
  return (
    <div className="bg-gray-100">
      <div className="bg-white border-b hidden lg:flex px-3 py-1">
        <div className="container mx-auto px-4 flex items-center justify-between py-1 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={leadingImg} alt="Logo" className="h-16" />
            <h1 className="text-xl font-bold text-gray-800"><span className="text-[#00A300]">Agri</span> Trade Global</h1>
          </div>
        </div>
      </div>

      <Navbar></Navbar>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gallery px-8">
          {imgs.map((src, i) => (
            <div className="overflow-hidden rounded-xl shadow-lg" key={i}>
              <img src={src} className="w-full h-60 object-cover" alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
