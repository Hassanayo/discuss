import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="relative h-[110vh]">
        <img src="./assets/hero.png" className="absolute" alt="" />

        <div className="absolute px-12 top-32">
          <h1 className="font-bold text-4xl font-ussf text-white w-2/3 leading-normal">
            DISCUSS IS EXCITED TO EXTEND AN OPEN INVITATION TO ALL ARTISTES,
            CREATIVES, MODELS, PR'S, SPORT AND FASHION ENTHUSIAST AND
            VISIONARIES TO JOIN OUR INCLUSIVE COMMUNITY
          </h1>

          <p className="font-semibold font-ussf text-white text-xl w-2/3">
            Our ecosystem fosters networking, collaboration, and inspiration,
            providing a supportive environment where members can thrive and grow
            in their respective fields. We're a full-service entertainment
            company built on the belief that passion deserves a platform.
          </p>
        </div>
      </div>
    </>
  );
};
