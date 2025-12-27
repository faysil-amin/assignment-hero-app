import React, { Suspense } from "react";

import { useLoaderData } from "react-router";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Container from "../../Container/Container";
import HomeButton from "./HomeButton";

const Home = () => {
  const apiData = useLoaderData();
  return (
    <div>
      <Home1></Home1>
      <div className="px-6 md:px-0 mt-12">
        <h1 className="font-semibold text-2xl text-center">Trending Apps</h1>
        <p className="text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <Suspense fallback={"Loader...."}>
        <Container>
          <div className="grid px-6 md:px-0 md:grid-cols-4 gap-4">
            {apiData.map((res) => (
              <Home2 res={res}></Home2>
            ))}
          </div>
        </Container>
      </Suspense>
      <HomeButton></HomeButton>
    </div>
  );
};

export default Home;
