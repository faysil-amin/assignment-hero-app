import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { storeData } from "../../../Stores";
const AppsCard = ({ res }) => {
  const { image, title, companyName, ratingAvg, downloads, id } = res || {};
  return (
    <Link to={`/apps/${id}`}>
      <div
        className="card bg-base-100 shadow-xl mt-4 h-[435px]"
        onClick={() => storeData(id)}
      >
        <figure>
          <img className="w-[316px] h-[316px] p-2" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="font-medium text-base">
            <span>{companyName}: </span>
            {title}
          </p>
          <div className="flex items-center justify-between">
            <div
              className="text-[#00D390] round-sm flex items-center bg-[#F1F5E8] p-2 gap-2
                "
            >
              <FaDownload /> <p>{downloads / 1000000} M</p>
            </div>
            <div
              className="rounded-s-md flex items-center bg-[#FFF0E1] text-[#FF8811] p-2 gap-2
                "
            >
              <FaStar /> <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
