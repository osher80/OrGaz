import React, { useRef } from "react";
import { Header } from "./Header";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import Testejs from "./Testejs";

const ContactPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   alert("התופס נשלח בהצלחה");
  // };

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_a3kmjih', 'template_1r51ogj', form.current, {
            publicKey: 'LvSCYU6ZU2e-cAOpk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }

  return (
    <>
      <Header />
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: "url('public/images/bg8.webp')" }}
      >
        <h1 className="text-center text-4xl text-yellow-500">בואו נדבר </h1>
        <h3 className="text-center text-4xl my-1 text-yellow-500">
          השאירו פרטים
        </h3>
        <h2 className="text-center text-4xl my-1 text-yellow-500">
          לשיחת יעוץ ללא עלות{" "}
        </h2>

        <div className="container-fluid ">
          <div className="w-8/12 mx-auto">
            <div className="w-64 ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label text-yellow-500">שם</label>
                  <input
                    // {...register("name", { required: true, minLength: 2 })}
                    type="text"
                    className="form-control"
                    name="customer_name"
                  />{" "}
                  {/* {errors.name && (
                    <div className="text-red-500 d-block">
                      הקלד שם תקין(לפחות 2 אותיות)
                    </div>
                  )} */}
                </div>
                <div className="mb-3">
                  <label className="form-label text-yellow-500">מספר</label>
                  <input
                    // {...register("phone", { required: true, minLength: 9 })}
                    type="tel"
                    className="form-control"
                    name="message"
                  />{" "}
                  {/* {errors.phone && (
                    <div className="text-red-500 d-block">הקלד מספר תקין</div>
                  )} */}
                </div>
                <div className="mb-3">
                  <label className="form-label text-yellow-500">
                    איך נוכל לעזור
                  </label>
                  <input
                    // {...register("message", { required: true, minLength: 10 })}
                    type="text"
                    className="form-control"
                    name="message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-yellow-500"
                  value="Send"
                >
                  {" "}
                  חזור אלי
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
