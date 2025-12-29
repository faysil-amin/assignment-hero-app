import React, { useEffect, useState } from "react";
import downlode from "../../../assets/icon-downloads.png";
import rating from "../../../assets/icon-ratings.png";
import review from "../../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getData } from "../../../Stores";

const Details = ({ res }) => {
  const [install, setInstall] = useState(false);
  const handleInstall = () => {
    if (install) {
      setInstall(false);
    } else {
      setInstall(true);
      toast(`${title} is installing`);
      return;
    }
  };
  const {
    image,
    title,
    companyName,
    ratingAvg,
    downloads,
    reviews,
    ratings,
    description,
  } = res || {};
  useEffect(() => {
    const getStoreData = getData();
    const stored = getStoreData.map((res) => parseInt(res));
    console.log(stored);
  }, []);
  return (
    <div className="mt-10 mb-6 px-6 md:px-0">
      <div className="md:flex items-center gap-10 pb-6 border-b-1  border-[#001931]">
        <div className="flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-xl font-semibold text-center md:text-start">
              <span>{title}:</span>
              {companyName}
            </h1>
            <p className="text-center md:text-start">
              <span className="text-[#627382] ">Developed by </span>
              <span className="text-xl font-bold bg-linear-to-bl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                productive.io
              </span>
            </p>
          </div>
          <div className=" md:flex items-center gap-10 mt-8 px-6 md:px-0">
            <div className="flex items-center justify-center flex-col">
              <img src={downlode} alt="" />
              <p className="text-[#001931] my-2">Downlode</p>
              <h1 className="text-2xl font-bold">{downloads / 1000000} M</h1>
            </div>
            <div className="flex items-center justify-center flex-col my-8 md:my-0">
              <img src={rating} alt="" />
              <p className="text-[#001931] my-2">Average Ratings</p>
              <h1 className="text-2xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={review} alt="" />
              <p className="text-[#001931] my-2">Total Review</p>
              <h1 className="text-2xl font-bold">{reviews / 1000}K</h1>
            </div>
          </div>
          {/* install button */}
          <div className="text-center md:text-start mt-4">
            <button
              className="btn btn-success"
              disabled={install}
              onClick={() => handleInstall()}
            >
              {install ? "installed" : "install"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-4">Ratings</h1>
        {/* chart */}
        <div className="border-b-1 pb-6">
          <ResponsiveContainer height={300} width="100%">
            <BarChart data={ratings} layout="vertical">
              <XAxis axisLine={false} tickLine={false} type="number"></XAxis>
              <YAxis
                type="category"
                axisLine={false}
                tickLine={false}
                dataKey="name"
                reversed
              ></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="count" barSize={30} fill="#ff8811"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-xl">Description</h1>
          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
