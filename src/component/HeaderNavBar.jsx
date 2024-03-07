import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeaderNavBar = ({
  scrollToProfession,
  scrollToProject,
  scrollToContact,
}) => {
  const location = useLocation();
  return (
    <div className="absolute left-0 top-0 z-10 h-20 w-full bg-white bg-opacity-10 py-5 shadow-md lg:px-40">
      <div className="flex justify-between gap-x-48 leading-10 text-white/80 lg:px-[200px]">
        <img className="w-10" src="/icon/R-Logo.png" />
        <div
          className={`hidden justify-start text-nowrap lg:flex ${location.pathname == "/" ? "gap-x-6" : "gap-x-10"} font-extralight`}
        >
          <Link to="/" className="hover:cursor-pointer hover:text-[#00D646]">
            HOME
          </Link>
          {location.pathname == "/" && (
            <Link
              onClick={scrollToProfession}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              PROFESSION
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              onClick={scrollToProject}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              PROJECT
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              onClick={scrollToContact}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              CONTACT
            </Link>
          )}
          {location.pathname == "/project" && (
            <Link
              onClick={() => {
                window.open("https://tvm-0wj4.onrender.com/", "_blank");
              }}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              台北排球人地圖
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              to="/project"
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              專案介紹
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
