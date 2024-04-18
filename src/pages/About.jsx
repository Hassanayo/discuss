import React from "react";
import { NavbarT } from "../components/navbarT";
import { Footer } from "../components/footer";

export const About = () => {
  const teamArray = [
    {
      name: "ONAOLAPO TONAS",
      role: "Chief Executive Officer",
    },
    {
      name: "Basil-Mmereole Precious Chisom",
      role: "Chief Operating Officer",
    },
    {
      name: "IYANUOLUWA",
      role: "Creative Director",
    },
    {
      name: "PEACE MARIONBRAIDE",
      role: "Executive Assistant",
    },
    {
      name: "OLAYINKA DAVID",
      role: "Creative Designer",
    },
  ];

  return (
    <>
      <div>
        <NavbarT />

        <div className="mx-24 mt-20 border-b-2 border-[#120d0d]">
          <img
            src="./assets/logo.svg"
            className="w-[100vh] pb-10 flex mx-auto"
            alt=""
          />
        </div>

        <div className="mx-24 font-serif font-light text-2xl my-10 border-b-2 border-[#120d0d]">
          <p className="pb-10">
            DISCUS is a magazine, full service entertainment company and all
            inclusive management agency founded by{" "}
            <span className="font-semibold">Onaolapo Tonas</span> and
            <span className="font-semibold"> Basil-Mmereole Precious</span>.
            DISCUS aims to become the ultimate source of Arts and Entertainment
            by fostering its diversity in our ecosystem. We are passionate about
            cultivating inclusive community of passionate individuals in Music,
            Sports, Arts, Fashion, Photography, Film and so on. As a
            multi-faceted entertainment company, we offer a diverse range of
            services, events, and opportunities to support and empower talented
            individuals and organizations across various artistic disciplines
            through talent management, exclusive content, marketing and
            strategic brand development, we inspire and elevate our sports and
            creative community
          </p>
        </div>

        <div className="mx-24 my-10">
          <div className="grid gap-y-4 grid-cols-3">
            {teamArray.map((item) => {
              return (
                <div>
                  <h1 className="font-ussf font-semibold text-2xl">{item.name}</h1>
                  <p className="font-serif font-medium text-xs">{item.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
};
