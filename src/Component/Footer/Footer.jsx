import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black h-[200px]">
      <Container>
        <div className="px-6  flex items-center justify-between pt-10 pb-4 border-b-1 border-[#FAFAFA]">
          <div className="flex items-center">
            <img className="w-[40px] h-[40px]" src={logo} alt="" />
            <a className="text-xl font-bold text-white">HERO.IO</a>
          </div>
          <div className="text-white">
            <h1>Social Links</h1>
            <div className="flex items-center gap-4 mt-2">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-[#fafafa] mt-12">
          Copyright © 2025 - All right reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
