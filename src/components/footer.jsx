import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year)
  return (
    <>
      <div className="flex items-center bg-[#1A1A1A] justify-around p-20 text-white font-oswo">
        <img src="./assets/logoAlt.png" alt="" />

        <div>
          <ul className="flex flex-col gap-y-6 text-xl">
            <li>MUSIC</li>
            <li>SPORTS</li>
            <li>FASHION</li>
            <li>ART & DESIGN</li>
            <li>EDITORIALS</li>
            <li>EVENTS</li>
            <li>ABOUTS</li>
          </ul>
        </div>

        <div className="gap-x-4 inline-flex">
          <img src="./assets/X.png" alt="" />
          <img src="./assets/instagram.png" alt="" />
          <img src="./assets/linkedin.png" alt="" />
          <img src="./assets/pinterest.png" alt="" />
          <img src="./assets/whatsapp.png" alt="" />
        </div>
      </div>

      <div>
        <p className="font-serif font-bold text-[#D9D9D9] bg-[#1A1A1A] text-center text-base py-10">&copy; DISCUSS {year} ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
};
