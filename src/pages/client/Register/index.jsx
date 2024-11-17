import React from "react";
import CoverImage from "../../../assets/client/register/cover.png";

const Register = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 ">
        <img className="w-screen h-screen" src={CoverImage} alt="cover-image" />
      </div>
      <div className="col-span-2 mx-20 bg-red-400">
        <div className="text-xl text-left font-roboto">yobook</div>
      </div>
    </div>
  );
};

export default Register;
