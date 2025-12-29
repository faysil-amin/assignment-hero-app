import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppsCard from "./AppsCard";

const Apps = () => {
  const appsApi = useLoaderData();

  const [serch, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const dataFilter = appsApi.filter((res) =>
    res.title.toLowerCase().includes(serch.toLowerCase())
  );

  return (
    <div>
      <div className="px-6 md:px-0 mt-12">
        <h1 className="font-semibold text-2xl text-center">
          Our All Applications
        </h1>
        <p className="text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-2 md:flex items-center justify-between px-6 md:px-0">
        <div>
          <h2 className="font-bold">({dataFilter.length}) Found Apps</h2>
        </div>
        <div>
          <label className="input mt-4 md:mt-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            {/* input */}
            <input
              type="search"
              required
              placeholder="Search"
              onChange={handleInput}
              defaultValue={serch}
            />
          </label>
        </div>
      </div>
      {serch === "" ? (
        <div className="grid md:grid-cols-4 px-6 md:px-0 gap-4 my-4">
          {appsApi.map((res) => (
            <AppsCard key={res.id} res={res}></AppsCard>
          ))}
        </div>
      ) : dataFilter.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-4 my-4">
          {dataFilter.map((res) => (
            <AppsCard key={res.id} res={res}></AppsCard>
          ))}
        </div>
      ) : (
        <div className="my-40">
          <h1 className="text-4xl font-bold text-center">No Data Found</h1>
        </div>
      )}
    </div>
  );
};

export default Apps;
