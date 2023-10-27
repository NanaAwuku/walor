import React from "react";
import { Route, Routes } from "react-router-dom";

// import { Navbar, Sidebar } from "./components";
import { Home, CampaignDetails, CreateCampaign, Profile } from "./pages";

const App = () => {
  return (
    <div className="relative w-full flex flex-row">
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
