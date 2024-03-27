import React from "react";
import "../App.css";
import { GiStakeHammer } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { Header } from "./Header";
import { Home2 } from "./Home2";

export const Home1 = () => {
  return (
    <>
      <Header />
      <div className="hero_area ">
        <div className=" d-flex justify-content-center align-items-center flex-column ">
          <h1 className="ol display-2 rounded-4 text-white my-4 text-center">
          אור רודה - טכנאי גז{" "}
          </h1>
          <h2 className="ol text-white display-4 rounded-4 text-center">
            מומלץ, בטיחותי ומקצועי
          </h2>
          <h3 className="ol1 text-white display-4 rounded-4 text-center">
             טכנאי גז מוסמך בכל הארץ{" "}
          </h3>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column my-5 ">
          <div>
            <a class="btn bg-orange-500 btn-lg my-2" href="tel:+972524808111">
              <i class="fas fa-phone">0524808111 התקשר</i>
              <FaPhoneAlt className="" />
            </a>
          </div>
          <div>
            <a
              className="btn btn-success btn-lg "
              target="_blank"
              href="https://api.whatsapp.com/send?phone=972524808111"
            >
              <i className="fab fa-whatsapp ">
                שלח הודעת WhatsApp
                <FaWhatsapp className="" />
              </i>
            </a>
          </div>
        </div>

        <div className="container row d-flex justify-content-center align-items-center my-5  ">
          <div className="fourbox rounded-4 d-flex justify-content-center align-items-center flex-column  mx-2 col-lg-3 col-sm-6 my-2">
            <h3>בטיחות</h3>
            <AiOutlineSafety className="po" />
          </div>
          <div className="fourbox mx-3 rounded-4 d-flex justify-content-center align-items-center flex-column  col-lg-3 col-sm-6 my-2">
            <h3> מקצועיות</h3>
            <GiStakeHammer className="po" />
          </div>
          <div className="fourbox  mx-3 rounded-4 d-flex justify-content-center align-items-center flex-column  col-lg-3 col-sm-6 my-2">
            <h3> אמינות</h3>
            <GiRibbonMedal className="po" />
          </div>
          <div className="fourbox  mx-3 rounded-4 d-flex justify-content-center align-items-center flex-column col-lg-3 col-sm-6 my-2">
            <h3> מחיר הוגן</h3>
            <FaRegHandshake className="po" />
          </div>
        </div>
      </div>
    </>
  );
};
