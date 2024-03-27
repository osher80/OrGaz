import React, { useState } from "react";
import { Header } from "../comps/Header";
import "../App.css";
import Footer from "../comps/Footer";
import 'animate.css/animate.min.css';
import classNames from 'classnames';

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('public/images/bg-gallery.jpg')" }}>
      <div className="container w-10/12 mx-auto p-5 ">
        <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-500">הפרויקטים שלי</h2>
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src="public/images/img18.jpeg"
              alt="תמונה 1"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img2.jpeg"
              alt="תמונה 2"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img3.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img4.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img5.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img7.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img8.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img9.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img10.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img11.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img12.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img13.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img14.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img15.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img16.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
            <img
              src="public/images/img17.jpeg"
              alt="תמונה 3"
              className={classNames("w-full h-full object-cover rounded-lg shadow-md animate__animated", "animate__zoomIn")}
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
