import React from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "./Details";

const AppsAbout = () => {
  const { id } = useParams();
  const parseInte = parseInt(id);
  const apiData = useLoaderData();
  const filterData = apiData.filter((res) => res.id === parseInte);

  return (
    <div>
      {filterData.map((res) => (
        <Details res={res}></Details>
      ))}
    </div>
  );
};

export default AppsAbout;
