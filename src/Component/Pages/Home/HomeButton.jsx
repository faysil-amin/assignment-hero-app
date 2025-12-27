import React, { useContext } from "react";
import { Link } from "react-router";
import { colorContext } from "../../Root/Root";

const HomeButton = () => {
  const { color, setColor } = useContext(colorContext);
  return (
    <Link to={"/apps"}>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setColor("apps");
          }}
          className="mt-6 mb-12 bg-linear-to-bl from-[#9F62F2] to-[#632EE3] px-3 py-1.5 md:px-6 md:py-3 text-white font-light md:font-bold rounded-sm"
        >
          Show All
        </button>
      </div>
    </Link>
  );
};

export default HomeButton;
