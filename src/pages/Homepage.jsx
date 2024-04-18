import React from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Invitation } from "../components/invite";
import { Grid } from "../components/grid";
import { Footer } from "../components/footer";

export const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Invitation />
        <Grid />
        <Footer />
      </div>
    </>
  );
};
