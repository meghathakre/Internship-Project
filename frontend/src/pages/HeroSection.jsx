import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../css/HeroSec.css";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="hero-section">
      <span className="tagline">No. 1 Job Hunt Website</span>
      <h1 className="hero-title">
        Search, Apply & <br />
        Get Your <span className="highlight">Dream Jobs</span>
      </h1>
      <p className="hero-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        aspernatur temporibus nihil tempora dolor!
      </p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Find your dream jobs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default HeroSection;
