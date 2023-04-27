import React from "react";

function Newsletter() {
  return (
    <div className="largecallout w-screen flex flex-col justify-center items-center text-white  md:p-20 pt-28 pb-28">
      <div className="font-semibold tracking-tight text-4xl md:text-6xl">
        Join the Newsletter
      </div>
      <div className="text-center text-white opacity-60 text-sm font-vietnam font-light tracking-tight px-16 md:px-28 pt-10">
        Stay up to date with the latest content delivered to your inbox.
      </div>
      <div className="pt-10 flex flex-row">
        <input
          type="text"
          placeholder="email@learnprompting.org"
          className="rounded-tl-md rounded-bl-md px-6 py-2  bg-white text-dark/500 text-sm font-medium tracking-tight ring-0 focus:outline-none w-[250px] md:w-[450px] focus:ring-0"
        />
        <div className="rounded-tr-md rounded-br-md bg-[#2A5F66] flex items-center font-semibold justify-center px-6 py-2">
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
