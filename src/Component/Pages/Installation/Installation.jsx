import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getData } from "../../../Stores";
import InstallationCard from "./InstallationCard";

const Installation = () => {
  const apiData = useLoaderData();
  const [list, setList] = useState("");
  const [storeFilterData, setStoreFilterData] = useState([]);
  const sortList = (e) => {
    setList(e);
    if (e === "Rating") {
      const sort = [...storeFilterData].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setStoreFilterData(sort);
    } else {
      const sort = [...storeFilterData].sort((a, b) => a.size - b.size);
      setStoreFilterData(sort);
    }
  };
  useEffect(() => {
    const getDataStore = getData();
    const mapGetDataStore = getDataStore.map((res) => parseInt(res));
    const FilterApiData = apiData.filter((res) =>
      mapGetDataStore.includes(res.id)
    );
    setStoreFilterData(FilterApiData);
  }, []);
  const unstall = (id) => {
    const filterUnstall = storeFilterData.filter((res) => res.id !== id);
    setStoreFilterData(filterUnstall);
  };
  return (
    <div>
      <div className="flex items-center justify-between px-6 md:px-0 my-4">
        <h1 className="text-base font-bold">
          ({storeFilterData.length}) Apps Found
        </h1>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort List: {list ? list : ""}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => sortList("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => sortList("Size")}>
              <a>Size</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        {storeFilterData.map((res) => (
          <InstallationCard res={res} unstall={unstall}></InstallationCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
