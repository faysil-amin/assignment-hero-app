import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
export const colorContext = createContext();
const Root = () => {
  const [color, setColor] = useState("home");
  const navigation = useNavigation();
  return (
    <div>
      <Container>
        <colorContext.Provider value={{ color, setColor }}>
          <Navbar></Navbar>
          {navigation.state === "loading" && (
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl font-bold">Loading.......</h1>
            </div>
          )}
          <Outlet></Outlet>
        </colorContext.Provider>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Root;
