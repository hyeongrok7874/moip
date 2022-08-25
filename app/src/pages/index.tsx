import React from "react";
import { Section1, Section2 } from "Section";
import { Footer } from "components";
import type { NextPage } from "next";
import ranking from "./api/ranking.json";

const Home: NextPage = () => {
  return (
    <>
      <Section1 />
      <Section2 ranking={ranking} />
      <Footer />
    </>
  );
};

export default Home;
