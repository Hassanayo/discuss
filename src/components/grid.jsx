import React from "react";

export const Grid = () => {
  const gridArray = [
    {
      id: 1,
      imgSrc: "./assets/gridImg1.png",
      heading: "Promotional Opportunities And Set Experiences",
      description:
        "A chance to be selected to go on set as a guest or as a work-for-hire based on your experience level, showcase your work, participate in events, contests, challenges, and collaborate on projects that elevate your visibility and expand your reach within the community and beyond.            ",
    },
    {
      id: 2,
      imgSrc: "./assets/gridImg2.png",
      heading: "Discovery & Recruitment",
      description:
        "   Explore opportunities for talent representation and management, including access to casting calls, auditions, and career guidance from industry professionals.",
    },
    {
      id: 3,
      imgSrc: "./assets/gridImg3.png",
      heading: "Discounts and Perks",
      description:
        "Enjoy discounts on products, services, and events from our partners and sponsors, and surprises reserved exclusively for our waitlist members",
    },
  ];

  const ctaArray = [
    { imgSrc: "./assets/cta1.png" },
    { imgSrc: "./assets/cta2.png" },
    { imgSrc: "./assets/cta3.png" },
  ];
  return (
    <>
      <div className="px-12">
        <div className="grid grid-cols-3 gap-x-3 mb-20 ">
          {gridArray.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.imgSrc} className="h-80 w-full" alt="" />

                  <div className="bg-[#1A1A1A] text-[#FAF5FF] p-10">
                    <h1 className="font-oswo text-2xl mb-4 h-16 font-semibold">
                      {item.heading}
                    </h1>
                    <div className="border-t-2 border-solid border-white w-20 mb-3 rounded-full"></div>

                    <p className="text-[10px] font-serif h-20 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#1A1A1A] text-center w-1/2 mx-auto px-20 py-6 mb-10">
          <h1 className="font-semibold text-4xl text-white">BECOME A MEMBER</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-ussf text-5xl font-semibold">
            COMMUNITY SPOTLIGHT
          </h1>
          <p className="my-4 font-oswo font-extralight text-[#1A1A1A] text-2xl">
            Every month, we'll shine the spotlight on one outstanding member of
            our creative community. As our featured star, you'll receive
            exclusive access to unique opportunities tailored to your talents
            and interests. From being showcased in our monthly issue
            publications to collaborating on exciting projects, the
            possibilities are endless, with these opportunities spanning every
            sector of our community ecosystem.
          </p>

          <div className="grid grid-cols-3 my-10 gap-x-3">
            {ctaArray.map((cta) => {
              return (
                <>
                  <img src={cta.imgSrc} alt="" />
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-[#1A1A1A] text-center w-1/2 mx-auto px-20 py-6 mb-10">
          <h1 className="font-semibold text-4xl text-white">
            JOIN THE COMMUNITY
          </h1>
        </div>

        <div className="relative h-[100vh]">
          <img className="absolute" src="./assets/newMag.png" alt="" />

          <div className="text-white top-48 flex items-center flex-col justify-center relative">
            <h1 className="font-ussf mb-4 text-6xl font-semibold w-2/3 mx-auto text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div className="flex gap-x-4 items-center">
              <input
                type="text"
                className="py-2 px-4 w-72 font-serif"
                name=""
                placeholder="discusmag@gmail.com"
                id=""
              />

              <button className="bg-[#F18701] border-2 font-serif border-solid border-white px-4 py-2 font-bold">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
