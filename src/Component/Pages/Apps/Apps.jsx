import React from "react";
import { useLoaderData } from "react-router";
import AppsCard from "./AppsCard";

const Apps = () => {
  const appsApi = useLoaderData();
  return (
    <div className="grid md:grid-cols-4 gap-4 my-8">
      {appsApi.map((res) => (
        <AppsCard res={res}></AppsCard>
      ))}
    </div>
  );
};

export default Apps;
