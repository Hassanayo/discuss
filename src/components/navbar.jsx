import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const toggleHover = () => {
    setNavState(!navState);
  };

  const handleMouseEnter = (id) => {
    setNavState(id);
  };

  const handleMouseLeave = () => {
    setNavState(null);
  };
  return (
    <>
      <div className="px-6 flex items-center justify-around py-5 font-sans">
        <Link to="/">
          <img src="./assets/logo.svg" alt="" />
        </Link>

        <ul className="inline-flex gap-5 font-medium text-xl font-ussf cursor-pointer">
          <li
            onMouseEnter={() => handleMouseEnter("music")}
            // onMouseLeave={handleMouseLeave}
            className="h hover:border-b-2 borders-solid border-[#1A1A1A] pb-2"
          >
            MUSIC
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("sports")}
            // onMouseLeave={handleMouseLeave}
          >
            SPORTS
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("fashion")}
            // onMouseLeave={handleMouseLeave}
          >
            FASHION
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            NEWS
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            ARTS & DESIGN
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            EVENTS
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            EDITORIALS
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            SPOTLIGHT
          </li>
          <li onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        <button className="bg-[#F18701] px-4 py-2 font-sans font-bold text-white text-base">
          SIGN UP
        </button>
      </div>

      <div className="pl-72 font-ussf font-light text-[#1A1A1A] text-xs relative">
        {navState === "music" && (
          <div className="pb-6">
            <ul className="flex flex-col gap-y-6 pl-1">
              <li className="font-medium text-sm">MUSIC</li>
              <li>Marketing</li>
              <li>Management</li>
              <li>Distribution</li>
              <li>Playlist Pitching</li>
            </ul>
          </div>
        )}
        {/* {navState === "sports" && <div>Sports Menu</div>} */}
        {/* {navState === "fashion" && <div>Fashion Menu</div>} */}
        {/* ...other menus... */}
      </div>
    </>
  );
};
