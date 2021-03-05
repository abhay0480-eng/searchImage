import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1> Homepage </h1>
      <Link to="/canvas">Canvas</Link>
    </div>
  );
}

export default HomePage;
