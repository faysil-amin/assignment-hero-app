import React from "react";
import Container from "../../Container/Container";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { removeLocalStore } from "../../../Stores";
const InstallationCard = ({ res, unstall }) => {
  const { image, title, companyName, ratingAvg, downloads, id } = res || {};
  const handleUnstall = (e) => {
    unstall(e);
    removeLocalStore(e);
  };
  return (
    <div className="px-6 md:px-6 ">
      <Container>
        <div className="p-4 bg-[#D9D9D9] rounded-xl mt-2 md:flex items-center justify-between">
          <div className="flex items-center gap-6 ">
            <img
              className="w-[60px] h-[60px] border p-1 rounded-sm rounded-xl"
              src={image}
              alt=""
            />
            <div>
              <div>
                <h1>
                  {companyName} : {title}
                </h1>
                <div className="flex items-center gap-12 my-2">
                  <div className="text-green-400 flex items-center gap-2">
                    <FaDownload />
                    <p>{downloads / 10000} M</p>
                  </div>
                  <div className="text-[#FF8811] flex items-center gap-2">
                    <FaStar />
                    <p>{ratingAvg}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 md:mt-0" onClick={() => handleUnstall(id)}>
            <button className="btn btn-success">Unstall</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstallationCard;
