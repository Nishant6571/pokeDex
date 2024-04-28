import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import SearchResultPage from "../Pages/SearchResultPage";
import DetailsPage from "../Pages/DetailsPage";

const AllRoutes = () => {
  return (
    <>
      {/* Routing for homepage searchpage And detailspage */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
