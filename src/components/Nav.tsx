import React from "react";
import logo42 from "../images/42_logo_black.svg";

interface Props {
  path?: string;
}

const Nav: React.FC<Props> = ({ path }) => {
  return (
    <header
      className={`transform duration-100 fixed top-0 w-full h-14 md:h-16 ${
        path !== "/" && "bg-black bg-opacity-90"
      }`}
    >
      <nav
        className={`flex justify-end text-base md:text-lg font-bold h-full content-center`}
      >
        <div
          className={`transform duration-100 my-auto mx-4 ${
            path === "/project-list"
              ? "text-primary underline"
              : "hover:text-primary hover:underline"
          } cursor-pointer`}
        >
          Project List
        </div>
        <div className={`flex bg-primary cursor-pointer px-4`}>
          <img className={`w-6 md:w-8 my-auto`} src={logo42} alt={"42logo"} />
          <p className={`ml-2 text-black my-auto`}>login</p>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
