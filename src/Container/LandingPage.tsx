import React from "react";
import Button from "../Components/base/button/button";
import background from "../Assets/loginbgImage.svg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute top-8 left-10">
          <div className="flex flex-row items-center">
            <img
              src={require("../Assets/logo.png")}
              alt="img"
              height={30}
              width={30}
            />
            <span className="text-sm pl-1">E-Book Store</span>
          </div>
        </div>
        <span
          className="absolute top-10 bottom-0 right-0"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Login
        </span>
        <span
          className=" absolute top-10 bottom-0 right-20"
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Register
        </span>
        <span className="text-5xl text-black text-start">
          All of your ebook
          <br /> collection in one
          <br /> platform
        </span>
        <span className="text-lg text-gray-600 text-justify mt-5">
          World bestseller, scientific work,entertainment
          <br />
          literature and many more all in one platform,
        </span>
        <Button
          className=" py-3 text-white mt-4"
          color="primary"
          submit
          onClick={() => {
            navigate("/login");
          }}
        >{`Get Started`}</Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
