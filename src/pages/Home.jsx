import React from "react";
import { Header } from "../comps/Header";
import { Home1 } from "../comps/Home1";
import { Home2 } from "../comps/Home2";
import Home3 from "../comps/Home3";
import Footer from "../comps/Footer";

const Home = () => {
  return (
    <>
      <Home1 />
      <Home3 />
      <Home2 />
      <Footer />
    </>
  );
};

export default Home;
