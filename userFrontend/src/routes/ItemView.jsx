import React, { useEffect, useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import FeedbackForm from "../components/FeedbackForm";

export default function ItemView() {
  const [feedbackState, setFeednackstate] = useState(false);

  const formHandling = () => {
    setFeednackstate(true);
  };

  const [styleValue, setStyleValue] = useState("");
  const [styleValue1, setStyleValue1] = useState("none");
  const [upbutton, setUpbutton] = useState("none");
  const [downbutton, setDownbutton] = useState("");

  useEffect(() => {}, []);

  const handleStyling = () => {
    if (styleValue === "") {
      setStyleValue("none");
      setStyleValue1("");
      setUpbutton("");
      setDownbutton("none");
    } else {
      setStyleValue("");
      setStyleValue1("none");
      setUpbutton("none");
      setDownbutton("");
    }
  };



  return (
    <>
      <div className="flex flex-col justify-end w-full h-screen  md:w-[80%] m-auto lg:w-[70%] lg:m-auto lg:border lg:border-1px lg:border-black lg:justify-around lg:items-center  lg:p-4 ">
        <div className="w-[99%] h-[760px] m-auto lg:flex-row flex flex-col lg:justify-center lg:items-center">
          
          <div className="  mt-4 h-[375px]  flex  items-center justify-center rounded md:bg-red-200  sm:bg-blue-400 lg:bg-red-900 bg-food bg-cover bg-no-repeat lg:w-[45%] lg:h-[500px] w-full">
            {/* <img
              className="lg:w-[50%] md:w-[100px]  md:bg-cover sm:w-96 w-[50px]  "
              src="src\assets\kottu-6319357_1280.jpg"
              alt=""
            /> */}
          </div>
          <div className="w-full h-[500px]  flex flex-col justify-center px-2   lg:mt-4 lg:w-[50%]">
            <div
              style={{ display: styleValue }}
              className="h-[340px] flex flex-col  justify-start gap-y-6  "
            >
              <div className="w-full mt-2 ">
                <h1 className="text-3xl font-bold">Chicken Kottu Full</h1>
              </div>
              <div className="w-full">
                <h1 className="w-full text-2xl font-bold ">RS.1200/=</h1>
              </div>
              <div className="text-lg text-justify text-wrap">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  earum pariatur suscipit nemo aspernatur sint, natus
                  accusantium repellendus corrupti iste dicta saepe rerum ipsam
                  cumque
                </p>
              </div>

              <div className="flex items-center ">
                <div className="flex text-3xl text-yellow-500  w-[50%] justify-around">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>

                <div className="text-xl text-center bg-blue-100">
                  <p>(out of 200)</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full h-auto mt-2 text-center">
              <h1 className="text-xl underline font-[120px]">
                Customer Feedbacks
              </h1>
              <div
                className="flex items-center mr-2 text-lg text-center"
                onClick={handleStyling}
                style={{ display: downbutton }}
              >
                <FaAnglesDown />
              </div>
              <div
                className="flex items-center mr-2 text-lg text-center"
                onClick={handleStyling}
                style={{ display: upbutton }}
              >
                <FaAngleDoubleUp />
              </div>
            </div>
            <div
              style={{ display: styleValue1 }}
              className="flex flex-col items-center justify-start mt-2  h-[350px] p-2 "
            >
              <div
                className="flex items-start justify-center w-full mt-1 "
                onClick={formHandling}
              >
                <p
                  className={`w-48 p-1 text-center text-white rounded-md bg-${
                    feedbackState ? "blue-400" : "blue-500"
                  }`}
                >
                  Give Your Feedback
                </p>
              </div>

              {feedbackState ? (
                <div className="items-center lg:flex lg:w-full ">
                  <FeedbackForm />
                </div>
              ) : (
                <div className="flex flex-col justify-normal w-full overflow-y-scroll overflow-x-hidden h-[400px] mt-4 p-2">
                  <div className="w-full h-auto border-b-[1.5px] border-black mt-2">
                    <div className="flex justify-start text-lg">
                      <p>Niroshan</p>
                      <div className="flex items-center ml-2 text-center text-yellow-500">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                    <div className="flex p-2 ml-2 text-left w-[98%] m-auto ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum, neque eum molestias
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-auto border-b-[1.5px] border-black mt-2">
                    <div className="flex justify-start text-lg">
                      <p>Niroshan</p>
                      <div className="flex items-center ml-2 text-center text-yellow-500">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                    <div className="flex p-2 ml-2 text-left w-[98%] m-auto ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum, neque eum molestias
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-auto border-b-[1.5px] border-black mt-2">
                    <div className="flex justify-start text-lg">
                      <p>Niroshan</p>
                      <div className="flex items-center ml-2 text-center text-yellow-500">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                    <div className="flex p-2 ml-2 text-left w-[98%] m-auto ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum, neque eum molestias
                      </p>
                    </div>
                  </div>
                  {/* Additional feedback items */}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[99%] h-[80px] m-auto flex items-center justify-center">
          <Link to='/'>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
            >
              <p className="text-xl">CLOSE</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
