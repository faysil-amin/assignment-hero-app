import React, { useContext } from "react";
import { Link } from "react-router";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { colorContext } from "../Root/Root";
const Navbar = () => {
  const { color, setColor } = useContext(colorContext);
  const link = (
    <>
      <Link to={"/"} onClick={() => setColor("home")}>
        <li
          className={`font-semibold ${
            color === "home"
              ? "bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent underline decoration-[#9F62F2]"
              : ""
          }`}
        >
          Home
        </li>
      </Link>
      <Link to={"/apps"} onClick={() => setColor("apps")}>
        <li
          className={`font-semibold ${
            color === "apps"
              ? "bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent underline decoration-[#9F62F2]"
              : ""
          } mx-6`}
        >
          Apps
        </li>
      </Link>
      <Link to={"/installation"} onClick={() => setColor("installation")}>
        <li
          className={`font-semibold ${
            color === "installation"
              ? "bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent underline decoration-[#9F62F2]"
              : ""
          }`}
        >
          Installation
        </li>
      </Link>
    </>
  );
  return (
    <Container>
      <div>
        <div className="navbar py-4 fexed">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <Link
              to={"/"}
              onClick={() => {
                setColor("home");
              }}
            >
              <div className="flex items-center">
                <img
                  className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
                  src={logo}
                  alt=""
                />
                <p className="btn btn-ghost text-sm md:text-xl bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent ">
                  HERO.IO
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/faysil-amin"
              className="bg-linear-to-bl from-[#9F62F2] to-[#632EE3] px-3 py-1.5 md:px-6 md:py-3 text-white font-light md:font-bold rounded-sm"
            >
              <div className="flex items-center gap-2">
                <FaGithub /> Contribute
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
