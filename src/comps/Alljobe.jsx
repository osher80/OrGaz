import React from "react";
import "../App.css";
import { MdGppGood } from "react-icons/md";
function Alljobe() {
  return (
    <>
   <div className="text-yellow-300">
  <h2 className="text-center text-5xl my-3">טכנאי לביצוע כל עבודות הגז</h2>
  <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-6/12 mx-auto">
    <div className="my-2 md:mx-4">
      <MdGppGood />
      <ul className="list-disc">
        <li>התקנת כיריים</li>
        <li>תיקון כיריים</li>
        <li>התקנת מחמם מים בגז</li>
        <li>התקנת גריל גז</li>
        <li>תיקון גריל גז</li>
        <li>הרכבת גריל גז</li>
        <li>התקנת טאבון גז</li>
        <li>התקנת חג"ז</li>
      </ul>
    </div>
    <div className="my-2 md:mx-4">
      <MdGppGood />
      <ul className="list-disc">
        <li>תיקון מחמם מים בגז ם המים</li>
        <li>טיפול בתקלות גז בבית</li>
        <li>איתור ותיקון דליפות גז</li>
        <li>הקמת מערכת גז לבית</li>
        <li>התקנת ברז גז</li>
        <li>הארכת צנרת גז</li>
        <li>עבודה עם קבלנים, אדריכלים ומעצבי פנים</li>
        <li>עבודה עם בעלי צימרים למערכות חימום</li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
}

export default Alljobe;
