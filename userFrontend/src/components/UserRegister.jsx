/* eslint-disable no-unused-vars */
import React from "react";
import kaemaLogo from "../assets/kaema logo.png";
import UserFooter from "./UserFooter";

const UserRegister = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div className="w-[100%] mt-32 md:w-[60%] md:mt-[-30px] mb-32 mx-auto">
        <img src={kaemaLogo} alt="logo" />
      </div>
      <div>
        <form action="" method="post">
          <input
            type="text"
            name="userPhoneNumber"
            id="userPhoneNumber"
            placeholder="Enter your phone number"
            required
            className="border border-black rounded-full px-20 py-4"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Register"
            id="userRegister"
            className="bg-green-600 text-white py-2 px-8 rounded-full active:scale-95 active:bg-green-800"
          />
        </form>
      </div>
      <div className="absolute bottom-0 mx-auto w-[100%]" >
        <UserFooter />
      </div>
    </div>
  );
};

export default UserRegister;
