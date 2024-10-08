import React from "react";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="mt-[5rem] cc">
      <div className="container">
        <h2 className="md:text-4xl text-3xl text-blue font-semibold text-center mb-10">
          Contact With Us
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 items-center justify-center md:justify-start md:items-center">
            <img
              src="https://anuragsinghbam.netlify.app/images/contact-me.svg"
              alt="contact image"
            />
          </div>
          <form className="w-full md:w-1/2 flex flex-col gap-5 items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex text-center items-center gap-1 text-lg font-sm text-gray-700">
                <FaRegUser />
                <p>Name</p>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="border-[.09rem] border-gray-400 w-full p-3 rounded-md outline-none capitalize"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex text-center items-center gap-1 text-lg font-sm text-gray-700">
                <CiMail />
                <p>Email</p>
              </div>
              <input
                type="Email"
                placeholder="Email"
                className="border-[.09rem] border-gray-400 w-full p-3 rounded-md outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex text-center items-center gap-1 text-lg font-sm text-gray-700">
                <FiMessageSquare />
                <p>Massage</p>
              </div>
              <textarea
                rows="6"
                className="border-[.09rem] border-gray-400 w-full p-3 rounded-md outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-blue text-white text-md rounded-md p-2 w-full gap-1"
            >
              <RiSendPlaneFill />
              <p> Send Message</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
