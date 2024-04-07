import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MailVerification = () => {
  return (
    <div className="w-full">
      <Header />
      <section className="w-full flex justify-center items-center px-8 md:p-0 min-h-screen">
        <div className="flex items-center flex-col text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Please verify your email...
          </h2>
          <img src="" alt="#" className="my-5" />
          <p className="text-sm text-gray-600">
            Please verify your email address. We've sent a confirmation email to
            :
          </p>
          <span className="font-bold my-4"> mohittailor997@gmail.com</span>{" "}
          <p className="text-sm text-gray-600">
            Click the confirmation link in that email to begin using Dribble.
          </p>
          <p className="text-sm text-gray-600 sm:max-w-[600px] my-4 ">
            Didn't recieve the email? Check youe Spam folder, it may have been
            caught by filter. if you still don't see it, you can{" "}
            <span className="text-pink-500 font-bold">
              resend the confirmation email.
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Wrong email address?{" "}
            <span className="text-pink-500 font-bold">Change it</span>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MailVerification;
