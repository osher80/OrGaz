import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">
              צרו קשר
              <FaHeart /></h3>
            <p className="text-gray-400">אשמח לעזור תמיד באהבה </p>
            <a class="" href="tel:+972524808111">
            <p className="text-gray-400">טלפון: 0524808111 </p>
            </a>
            <p className="text-gray-400">אימייל: orroda101@gmail.com</p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-white text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">דף הבית</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">שירותים</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">תמיכה טכנית</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">אודות</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer