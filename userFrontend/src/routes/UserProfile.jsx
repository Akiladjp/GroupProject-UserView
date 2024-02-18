/* eslint-disable no-unused-vars */
import React from "react";
import UserFooter from "../components/UserFooter";

const UserProfile = () => {
  return (
    <>
      <div className="my-16 flex flex-col py-10">
        <center>
          <h1 className="flex justify-center text-[24px] font-bold">
            My Profile
          </h1>
          <div className="flex w-[100%] mt-8">
            <form action="" method="post" className="w-[100%] flex flex-col">
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Name"
                  className="border rounded-xl pl-4 w-[300px] my-4 py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="userphone"
                  id="userphone"
                  placeholder="Your Phone Number"
                  className="border rounded-xl pl-4 w-[300px] my-4 py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                  className="border rounded-xl pl-4 w-[300px] my-4 py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="border rounded-xl pl-4 w-[300px] my-4 py-2"
                />
              </div>
              <div className="flex justify-center">
                <button className="m-6 border w-20 text-[14px] h-10 sm:w-24 sm:h-10 lg:w-32 lg:py-2 rounded-2xl bg-green-800 text-white active:scale-95">
                  SAVE
                </button>
                <button className="m-6 border w-20 text-[14px] h-10 sm:w-24 sm:h-10 lg:w-32 lg:py-2 rounded-2xl bg-red-800 text-white active:scale-95">
                  LOG OUT
                </button>
              </div>
            </form>
          </div>
        </center>
      </div>
      <div className="absolute bottom-0 w-[100%]">
        <UserFooter />
      </div>
    </>
  );
};

export default UserProfile;
