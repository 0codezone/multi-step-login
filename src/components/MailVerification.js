import React from "react";

const MailVerification = () => {
  return (
    <div className="w-full h-screen">
      <section className="w-full p-5">
        <h2 className="px-2 text-2xl ">Dribble</h2>
      </section>
      <section className="w-full flex justify-center items-center mt-5 px-8 md:p-0">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Please verify your email...
          </h2>
          <img src="" alt="#" className="my-5" />
          <p className="text-sm text-black/70">
            Please verify your email address. We've sent a confirmation email to
            :
          </p>
          <span className="font-bold my-4"> account@refeor.design</span>{" "}
          <p className="text-sm text-black/70">
            Click the confirmation link in that email to begin using Dribble.
          </p>
          <p className="text-sm text-black/70 sm:max-w-[600px] my-4 ">
            Didn't recieve the email? Check youe Spam folder, it may have been
            caught by filter. if you still don't see it, you can{" "}
            <span className="text-pink-500 font-bold">
              resend the confirmation email.
            </span>
          </p>
          <p className="text-sm text-black/70">
            Wrong email address?{" "}
            <span className="text-pink-500 font-bold">Change it</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MailVerification;
