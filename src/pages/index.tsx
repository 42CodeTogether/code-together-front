import React from "react";
import Nav from "../components/Nav";

export type HomeProps = {};

/** `/` Main에 해당 하는 Page Component 입니다. */
const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export default Home;
