import React, { useEffect, useState } from "react";
import "../App.css";
import Activities from "../components/Activities";
import Calendar from "../components/Calendar";

function GridPage() {
  return (
    <div className="grid">
      <div className="mx-auto mt-4 mb-4">
        <h3>Welcome to your Grid</h3>{" "}
      </div>
      <div className="mx-auto mt-4">
        <h5>Click on the grid squares to see your daily results.</h5>{" "}
      </div>
      <Calendar />
    </div>
  );
};

export default GridPage;
