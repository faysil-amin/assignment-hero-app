import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import phoneImg from "../../../assets/hero.png";
import Container from "../../Container/Container";
const Home1 = () => {
  return (
    <div>
      <Container>
        <div className="mt-14 mb-8">
          <div className="px-6">
            <h1 className="text-5xl font-bold text-center">We Build </h1>
            <h1 className="text-5xl font-bold text-center">
              <span className="font-extrabold bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              <span>Apps</span>
            </h1>
          </div>
          <p className="px-6 text-sm md:text-base text-[#627382] text-center max-w-xl md:max-w-3xl mx-auto mt-4">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="md:py-3 md:px-4 py-1.5 px-2 btn">
            <a href="" className="flex items-center gap-2">
              <div className="text-xl">
                <FaGooglePlay />
              </div>
              <p>
                <a
                  href="https://play.google.com/store/games?hl=en"
                  target="_blank"
                >
                  Google Play
                </a>
              </p>
            </a>
          </button>
          <button className="md:py-3 md:px-4 py-1.5 px-2 btn">
            <a href="" className="flex items-center gap-2">
              <div className="text-xl">
                <FaAppStoreIos />
              </div>
              <p>
                <a href="https://www.apple.com/app-store/" target="_blank">
                  App Store
                </a>
              </p>
            </a>
          </button>
        </div>
        <div className="flex items-center justify-center px-6 mt-8">
          <img className="w-[542px]" src={phoneImg} alt="" />
        </div>
      </Container>
      <div className="py-8 bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex items-center justify-center">
        <div className="flex items-center justify-between flex-col">
          <h1 className="text-4xl text-center text-white font-semibold px-6">
            Trusted by Millions, Built for You
          </h1>
          <div className="mt-8 grid md:grid-cols-3 md:gap-50">
            <div className="text-white">
              <p className="text-base text-center ">Total Downloads</p>
              <h1 className="text-6xl font-bold text-center">29.6M</h1>
              <p className="text-base text-center">21% more than last month</p>
            </div>
            <div className="text-white mt-8 md:mt-0">
              <p className="text-base text-center">Total Reviews</p>
              <h1 className="text-6xl font-bold text-center">906K</h1>
              <p className="text-base  text-center">46% more than last month</p>
            </div>
            <div className="text-white mt-8 md:mt-0">
              <p className="text-base text-center">Active Apps</p>
              <h1 className="text-6xl font-bold text-center">132+</h1>
              <p className="text-base text-center">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
