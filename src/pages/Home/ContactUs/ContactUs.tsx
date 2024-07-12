import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white p-3 md:p-8 rounded-lg shadow-lg  w-[100%] text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 opacity-90">
          your personal SALES guide...
        </h1>

        <form className="">
          <textarea
            placeholder="Enter your Message..."
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="p-3 border border-gray-300 rounded-md w-full md:w-auto mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="py-3 px-10 bg-black text-white rounded-md w-full md:w-auto"
          >
            Send
          </button>
        </form>

        <div className="">
          <img
            src="https://www.shutterstock.com/image-photo/cricket-ball-resting-on-bat-600nw-114007321.jpg" // replace with your image path
            alt="Shoe"
            className="w-[100%] h-auto mt-5 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
