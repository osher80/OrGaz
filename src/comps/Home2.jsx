import React from "react";


export const Home2 = () => {
  return (
    <>
      <main className="container-fluid bg-slate-200 ">
        <h2 className="display-2 text-center text-orange-500"> השירותים שאני מספק כטכנאי גז</h2>
        <div className="container m-auto w-10/12 row justify-content-center align-items-center justify-content-center  justify-content-between">
          <div className="border border-slate-950 w-80 h-80  d-flex justify-content-center align-items-center flex-column  text-center col-md-4 my-5">
            <img
              src="images/כניסת-מים-מדוד-השמש-1-e1683045941308.png"
              alt=""
              width="200"
            />
            <h4 className="display-6">התקנה ותיקון מחמם מים גז</h4>
            <h5 className="text-[1.3rem] text-orange-500">
              מחמם מים בגז הפך למוצר צריכה בכל בית נצילות של 100% מים חמים 24/7
            </h5>
          </div>
          <div className="border border-emerald-200 w-80 h-80  d-flex justify-content-center align-items-center flex-column  text-center col-md-4">
            <img src="images/צנרצגז.png" alt="" width="200" />
            <h4 className="display-6"> בדיקות והתקנות צנרת גז</h4>
            <h5 className="text-[1.3rem] text-orange-500">
              תכנון מערכות גז לבתים וחידוש צנרת בדיקות ואיתור דליפות
            </h5>
          </div>
          <div className="border border-emerald-200 w-80 h-80  d-flex justify-content-center align-items-center flex-column  text-center col-md-4">
            <img src="images/כייריםגז.jpg" alt="" width="150" height="150" />
            <h4 className="display-6">תיקוני כיריים והזזת נקודות</h4>
            <h5 className="text-[1.3rem] text-orange-500 my-2">
              התקנת כיריים הזזת נקודות וברזי גז
            </h5>
          </div>
        </div>
      </main>
    </>
  );
};

