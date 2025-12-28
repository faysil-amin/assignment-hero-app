import React, { useContext } from "react";
import errorImg from "../../../assets/error-404.png";
import { Link } from "react-router";
import { colorContext } from "../../Root/Root";
const ErrorPage = () => {
  const { color, setColor } = useContext(colorContext);
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img className="w-[400px] px-4 md:px-0" src={errorImg} alt="" />
        <h1 className="text-3xl font-bold text-center mt-4">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] text-center mt-2">
          The page you are looking for is not available.
        </p>
        <Link to={"/"}>
          <button
            onClick={() => {
              setColor("home");
            }}
            className="mt-6 mb-12 bg-linear-to-bl from-[#9F62F2] to-[#632EE3] px-3 py-1.5 md:px-6 md:py-3 text-white font-light md:font-bold rounded-sm"
          >
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
