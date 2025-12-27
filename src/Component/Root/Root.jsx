import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
export const colorContext = createContext();
const Root = () => {
  const [color, setColor] = useState("");
  return (
    <div>
      <Container>
        <colorContext.Provider value={{ color, setColor }}>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </colorContext.Provider>
      </Container>
    </div>
  );
};

export default Root;
