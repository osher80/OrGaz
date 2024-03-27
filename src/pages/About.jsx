import React from "react";
import { Header } from "../comps/Header";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Footer from "../comps/Footer";
import Alljobe from "../comps/Alljobe";

const About = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Header />
      <div className="hero_area1">
        <h1 className="display-4 text-center  text-yellow-300 ">
          אור רודה טכנאי גז
        </h1>
        <div className="flex flex-col md:flex-row justify-between container w-7/12 mx-auto text-yellow-500 my-3">
  <div className="md:w-1/2">
    <p className="text-right">
      שמי אור רודה, גר בחריש ונותן שירות כטכנאי גז בכל הארץ. בעל ניסיון ומוניטין נתתי שירות לאלפי לקוחות מרוצים. מוסמך טכנאי גז רמה 1 בעל רישיון משרד התשתיות. מורשה לספק שירותים למגזר הפרטי, למגזר המוסדי והתעשייתי. מי שמכיר אותי יודע שהדגש הכי חשוב בעבודה שלי הוא לבצע את העבודה על הצד הטוב ביותר, ואלו לא סתם מילים. כטכנאי גז אני לא יכול להרשות לעצמי שמשהו בתהליך העבודה לא יהיה 100% כיוון שזוהי הבטיחות שלכם לכן, כל עבודה מתבצעת ב100% בטיחות, דיוק ואיכות!
    </p>
  </div>
  <div className="md:w-1/2 mt-4 md:mt-0">
    <img
      src="public/images/imgYYT.jpeg"
      width={350}
      alt=""
      className="rounded-lg mx-auto"
    />
  </div>
</div>

        
        <Alljobe />
        <main className="container-fluid ">
          <div className="border border-spacing-y-11 w-8/12 mx-auto text-yellow-300 rounded ">
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                גז הוא מצב צבירה של החומר, בו המולקולות רחוקות אחת מהשנייה?
              </AccordionHeader>
              <AccordionBody>
                משיכה ביניהן נמוכה, והן נעות בחופשיות בהתאם לצורת הכלי בו הן
                נמצאות. גז, בדומה לנוזל, מסוגל לזרום. בניגוד לנוזל, לגז אין נפח
                קבוע, והוא נוטה להתפשט כדי למלא את כל הנפח שהוקצה לו (עיקרון
                אבוגדרו). האנרגיה הקינטית של גז גדולה מזו של נוזל או מוצק, אך
                קטנה מזו של הפלזמה.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                גזים נבדלים במשוואת המצב שלהם?
              </AccordionHeader>
              <AccordionBody>
                ככל שהגז נמצא בטמפרטורה הקרובה יותר לטמפרטורת הרתיחה שלו, הוא
                קרוב יותר למצב הנוזל. בטמפרטורות נמוכות נוצרים קשרים חזקים יותר
                בין המולקולות. חוק אבוגדרו אומר שבתנאי לחץ וטמפרטורה שווים, כמות
                שווה של גז אידיאלי (גז תאורטי חסר נפח או לחץ פנימי) תתפוס את
                אותו נפח ולא משנה גודל המולקולה. עבור גזים בלתי אידיאליים, קשר
                זה, הקרוי משוואת המצב, משתנה. גז ון-דר-ולס הוא דוגמה לגז בלתי
                אידיאלי.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                מולקולות הגז יכולות להיות בעלות מבנים מגוונים?
              </AccordionHeader>
              <AccordionBody>
                המשפיעים על האנרגיה הפנימית של הגז. הגז יכול להיות למשל חד
                אטומי, כפי שנפוץ בגזים אצילים, דו-אטומי, למשל כלור, חמצן או
                חנקן, או בעל מבנה מורכב יותר, אשר עשוי לערב מבנה מרחבי, למשל
                מולקולת המים, שהיא תלת אטומית כפופה. למבנה מולקולת הגז יש השפעה
                על דרגות החופש שלה, כלומר על יכולת התנועה של האטומים במולקולה זה
                ביחס לזה.
              </AccordionBody>
            </Accordion>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default About;
