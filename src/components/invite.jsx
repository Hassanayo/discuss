import React from "react";

export const Invitation = () => {
  const alertArray = [
    {
      heading: "20",
      details: "DAY",
    },
    {
      heading: "50",
      details: "MINUTES",
    },
    {
      heading: "20",
      details: "SECONDS",
    },
  ];
  return (
    <>
      <div className="py-10 px-12 flex justify-center flex-col items-center">
        <h3 className="font-serif font-semibold text-2xl mb-6">
          INVITATION IS OPEN UNTIL 30TH OF APRIL{" "}
        </h3>

        <div className="flex gap-x-5 justify-center items-center text-center mb-10">
          {alertArray.map((item) => {
            return (
              <>
                <div className="flex gap-y-4 flex-col">
                  <div className="bg-[#1A1A1A]  relative p-10">
                    <div className="font-digi text-white text-7xl">
                      {item.heading}
                    </div>
                  </div>
                  <p className="font-serif text-2xl font-semibold">
                    {item.details}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <div className="bg-[#1A1A1A] px-20 py-6 mb-10">
          <h1 className="font-semibold text-4xl text-white">
            JOIN THE DISCUS COMMUNITY
          </h1>
        </div>

        <div className="flex gap-6">
          <div className="flex w-full flex-col ">
            <img src="./assets/img1.png" className="h-[50vh] " alt="" />

            <div className="flex relative h-52 bg-[#1A1A1A] text-white px-3 py-6">
              <div>
                <div className="mb-10">
                  <h1 className="font-oswo font-medium text-2xl">
                    Priority Acess
                  </h1>
                </div>

                <div>
                  <div className="border-t-2 border-solid border-white w-20 mb-3 rounded-full"></div>

                  <p className="font-serif text-[10px] text-left">
                    Be among the first to experience our exciting platform and
                    gain access to exclusive content, events, and opportunities
                    before anyone else!
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-10 ">
                  <h1 className="font-oswo font-medium text-2xl text-right">
                    Early Bird Invitations
                  </h1>
                </div>

                <div>
                  <div className="left-60 relative border-t-2 border-solid border-white w-20 mb-3 rounded-full"></div>

                  <p className="font-serif text-right text-[10px]">
                    Receive early invitations to events, workshops,
                    masterclasses, and networking opportunities, providing you
                    with unique chances to connect, collaborate, and grow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col ">
            <img src="./assets/img2.png" className="h-[50vh] " alt="" />

            <div className=" relative bg-[#1A1A1A]  text-white px-3 py-6">
              <div>
                <div>
                  <h1 className="font-oswo font-medium text-2xl mb-10">
                    Professional Development
                  </h1>
                </div>

                <div>
                  <div className="border-t-2 border-solid border-white w-20 mb-3 rounded-full"></div>
                  <p className="font-serif text-[10px] text-left">
                    Take advantage of workshops, masterclasses, training/scout
                    camps and mentorship programs that help you develop your
                    skills- download real awarded treatments, director's notes
                    and breakdowns from visionary producers, receive first hand
                    training from professional coaches programs, refine your
                    craft, and achieve your career goals. Embark on a journey of
                    personal and professional growth as you explore new avenues
                    of creativity, push your boundaries, and discover the
                    endless possibilities that await you within our diverse and
                    dynamic community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
